// In-memory translation cache (Edge-runtime compatible, no fs/path)
const cache: Record<string, Record<string, string>> = {};

/**
 * Translate a single English text string to target locale using public Google Translate endpoint,
 * with in-memory caching.
 */
export async function translateText(text: string, targetLocale: string): Promise<string> {
  if (!text || targetLocale === 'en') return text;
  
  // Clean up whitespace
  const trimmed = text.trim();
  if (!trimmed) return text;
  
  if (!cache[targetLocale]) {
    cache[targetLocale] = {};
  }
  
  if (cache[targetLocale][trimmed]) {
    return cache[targetLocale][trimmed];
  }
  
  // Unofficial public Google translate API
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLocale}&dt=t&q=${encodeURIComponent(trimmed)}`;
  
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Google Translate API returned status ${res.status}`);
    }
    const json = await res.json();
    if (json && json[0]) {
      const translated = json[0].map((s: any) => s[0]).join('');
      cache[targetLocale][trimmed] = translated;
      return translated;
    }
    return text;
  } catch (err) {
    console.error(`Error translating text to "${targetLocale}":`, err);
    return text;
  }
}

/**
 * Recursively translate any text span in PortableText blocks
 */
export async function translateBodyBlocks(blocks: any[], targetLocale: string): Promise<any[]> {
  if (!blocks || !Array.isArray(blocks) || targetLocale === 'en') return blocks;
  
  // We make a deep clone to avoid mutating the cached original sanity document
  const clonedBlocks = JSON.parse(JSON.stringify(blocks));
  
  const promises: Promise<void>[] = [];
  
  function walk(node: any) {
    if (!node || typeof node !== 'object') return;
    
    if (node._type === 'span' && typeof node.text === 'string') {
      const textToTranslate = node.text;
      const promise = translateText(textToTranslate, targetLocale).then((translated) => {
        node.text = translated;
      });
      promises.push(promise);
    } else if (Array.isArray(node)) {
      for (const item of node) {
        walk(item);
      }
    } else {
      for (const key of Object.keys(node)) {
        walk(node[key]);
      }
    }
  }
  
  walk(clonedBlocks);
  await Promise.all(promises);
  return clonedBlocks;
}

/**
 * Get manual page translation if it exists, otherwise use automated machine translation.
 */
async function getTranslatedField(doc: any, field: string, targetLocale: string): Promise<string> {
  const manual = doc[`${field}_${targetLocale}`];
  if (typeof manual === 'string' && manual.trim()) return manual;
  
  const base = doc[field];
  if (typeof base === 'string' && base.trim()) {
    return translateText(base, targetLocale);
  }
  return base ?? '';
}

/**
 * Translate field values of a general object (e.g. Sanity Post, Category, or Design)
 */
export async function translateDocument(doc: any, targetLocale: string): Promise<any> {
  if (!doc || targetLocale === 'en') return doc;
  
  // Clone doc to prevent side effects
  const translatedDoc = { ...doc };
  
  // Translate standard text strings if present
  if (doc.title !== undefined) {
    translatedDoc.title = await getTranslatedField(doc, 'title', targetLocale);
  }
  if (doc.excerpt !== undefined) {
    translatedDoc.excerpt = await getTranslatedField(doc, 'excerpt', targetLocale);
  }
  if (doc.postTitle !== undefined) {
    translatedDoc.postTitle = await getTranslatedField(doc, 'postTitle', targetLocale);
  }
  if (doc.caption !== undefined) {
    translatedDoc.caption = await getTranslatedField(doc, 'caption', targetLocale);
  }
  if (doc.groupTitle !== undefined) {
    translatedDoc.groupTitle = await getTranslatedField(doc, 'groupTitle', targetLocale);
  }
  if (doc.groupDescription !== undefined) {
    translatedDoc.groupDescription = await getTranslatedField(doc, 'groupDescription', targetLocale);
  }
  
  // Translate categories
  if (doc.categories && Array.isArray(doc.categories)) {
    translatedDoc.categories = await Promise.all(
      doc.categories.map(async (c: any) => {
        if (c && typeof c === 'object') {
          const newC = { ...c };
          if (c.title !== undefined) {
            newC.title = await getTranslatedField(c, 'title', targetLocale);
          }
          return newC;
        }
        return c;
      })
    );
  }
  
  // Translate related posts
  if (doc.relatedPosts && Array.isArray(doc.relatedPosts)) {
    translatedDoc.relatedPosts = await Promise.all(
      doc.relatedPosts.map(async (p: any) => translateDocument(p, targetLocale))
    );
  }
  
  // Translate body of post
  if (doc.body && Array.isArray(doc.body)) {
    translatedDoc.body = await translateBodyBlocks(doc.body, targetLocale);
  }
  
  // Translate author bio
  if (doc.author && typeof doc.author === 'object') {
    translatedDoc.author = { ...doc.author };
    if (doc.author.bio && Array.isArray(doc.author.bio)) {
      translatedDoc.author.bio = await translateBodyBlocks(doc.author.bio, targetLocale);
    }
  }

  // Translate AI fields (faq, keyTakeaways, tldr, aiSummary)
  if (doc.ai && typeof doc.ai === 'object') {
    translatedDoc.ai = { ...doc.ai };
    if (typeof doc.ai.tldr === 'string') {
      translatedDoc.ai.tldr = await translateText(doc.ai.tldr, targetLocale);
    }
    if (typeof doc.ai.aiSummary === 'string') {
      translatedDoc.ai.aiSummary = await translateText(doc.ai.aiSummary, targetLocale);
    }
    if (doc.ai.keyTakeaways && Array.isArray(doc.ai.keyTakeaways)) {
      translatedDoc.ai.keyTakeaways = await Promise.all(
        doc.ai.keyTakeaways.map(async (item: any) => {
          if (typeof item === 'string') {
            return translateText(item, targetLocale);
          }
          return item;
        })
      );
    }
    if (doc.ai.faq && Array.isArray(doc.ai.faq)) {
      translatedDoc.ai.faq = await Promise.all(
        doc.ai.faq.map(async (faqItem: any) => {
          if (faqItem && typeof faqItem === 'object') {
            const newFaq = { ...faqItem };
            if (typeof faqItem.question === 'string') {
              newFaq.question = await translateText(faqItem.question, targetLocale);
            }
            if (typeof faqItem.answer === 'string') {
              newFaq.answer = await translateText(faqItem.answer, targetLocale);
            }
            return newFaq;
          }
          return faqItem;
        })
      );
    }
  }

  // Translate seo fields
  if (doc.seo && typeof doc.seo === 'object') {
    translatedDoc.seo = { ...doc.seo };
    if (typeof doc.seo.title === 'string') {
      translatedDoc.seo.title = await translateText(doc.seo.title, targetLocale);
    }
    if (typeof doc.seo.description === 'string') {
      translatedDoc.seo.description = await translateText(doc.seo.description, targetLocale);
    }
  }
  
  return translatedDoc;
}

/**
 * Helper to translate lists of documents
 */
export async function translateDocuments(docs: any[], targetLocale: string): Promise<any[]> {
  if (!docs || !Array.isArray(docs) || targetLocale === 'en') return docs;
  return Promise.all(docs.map((d) => translateDocument(d, targetLocale)));
}
