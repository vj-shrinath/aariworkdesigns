/**
 * Runtime translation is intentionally disabled.
 *
 * Blog content is translated in Sanity and read from locale-specific fields.
 * Calling an unofficial translation endpoint for every span made pages slow,
 * unreliable, and unsuitable for production. Missing translations fall back to
 * the English source field until the CMS translation is added.
 */
export async function translateText(text: string, targetLocale: string): Promise<string> {
  return text;
}

/**
 * Recursively translate any text span in PortableText blocks
 */
export async function translateBodyBlocks(blocks: any[], targetLocale: string): Promise<any[]> {
  return blocks;
}

/**
 * Get the CMS translation if it exists, otherwise use the English source.
 */
async function getTranslatedField(doc: any, field: string, targetLocale: string): Promise<string> {
  const manual = doc[`${field}_${targetLocale}`] ?? doc.translations?.[targetLocale]?.[field];
  if (typeof manual === 'string' && manual.trim()) return manual;
  return doc[field] ?? '';
}

function getTranslatedValue(doc: any, field: string, targetLocale: string): any {
  return doc?.[`${field}_${targetLocale}`] ?? doc?.translations?.[targetLocale]?.[field] ?? doc?.[field];
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
  
  // Use the localized Portable Text field when it exists. Otherwise retain English.
  if (doc.body && Array.isArray(doc.body)) {
    translatedDoc.body = getTranslatedValue(doc, 'body', targetLocale);
  }
  
  // Translate author bio
  if (doc.author && typeof doc.author === 'object') {
    translatedDoc.author = { ...doc.author };
    if (doc.author.bio && Array.isArray(doc.author.bio)) {
      translatedDoc.author.bio = getTranslatedValue(doc.author, 'bio', targetLocale);
    }
  }

  // Translate AI fields (faq, keyTakeaways, tldr, aiSummary)
  if (doc.ai && typeof doc.ai === 'object') {
    translatedDoc.ai = { ...doc.ai };
    if (typeof doc.ai.tldr === 'string') {
      translatedDoc.ai.tldr = getTranslatedValue(doc.ai, 'tldr', targetLocale);
    }
    if (typeof doc.ai.aiSummary === 'string') {
      translatedDoc.ai.aiSummary = getTranslatedValue(doc.ai, 'aiSummary', targetLocale);
    }
    if (doc.ai.keyTakeaways && Array.isArray(doc.ai.keyTakeaways)) {
      translatedDoc.ai.keyTakeaways = await Promise.all(
        doc.ai.keyTakeaways.map(async (item: any) => {
          if (typeof item === 'string') {
            return item;
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
              newFaq.question = getTranslatedValue(faqItem, 'question', targetLocale);
            }
            if (typeof faqItem.answer === 'string') {
              newFaq.answer = getTranslatedValue(faqItem, 'answer', targetLocale);
            }
            return newFaq;
          }
          return faqItem;
        })
      );
    }
  }

  const localizedAi = getTranslatedValue(doc, 'ai', targetLocale);
  if (localizedAi && typeof localizedAi === 'object') {
    translatedDoc.ai = localizedAi;
  }

  // Translate seo fields
  if (doc.seo && typeof doc.seo === 'object') {
    translatedDoc.seo = { ...doc.seo };
    if (typeof doc.seo.title === 'string') {
      translatedDoc.seo.title = getTranslatedValue(doc.seo, 'title', targetLocale);
    }
    if (typeof doc.seo.description === 'string') {
      translatedDoc.seo.description = getTranslatedValue(doc.seo, 'description', targetLocale);
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
