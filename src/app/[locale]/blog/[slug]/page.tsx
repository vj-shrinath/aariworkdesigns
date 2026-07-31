import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

import { client } from '@/sanity/client';
import { POST_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { portableTextComponents } from '@/sanity/lib/portableText';
import { getSeoImage } from '@/sanity/schema-utils';
import Header from '@/components/Header';
import ShareButtons from '@/components/ShareButtons';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import TableOfContents from '@/components/TableOfContents';
import { AuthorBox, KeyTakeaways, FaqSection } from '@/components/PostComponents';
import Footer from '@/components/Footer';
import styles from './PostPage.module.css';
import { getDictionary, translateField } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

export const runtime = 'edge'
export const revalidate = 3600; // Revalidate every hour

interface PageParams {
  locale: Locale;
  slug: string;
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale, slug } = params;
  let post = await client.fetch(POST_QUERY, { slug });
  if (!post) return { title: 'Post Not Found' };

  if (locale !== 'en') {
    const { translateDocument } = await import('@/lib/translate');
    post = await translateDocument(post, locale);
  }

  const ogImageSource = getSeoImage(post);
  const image = ogImageSource ? urlFor(ogImageSource).width(1200).height(630).url() : '';
  
  const title = translateField(post.seo, 'title', locale) || translateField(post, 'title', locale);
  const description = translateField(post.seo, 'description', locale) || post.ai?.aiSummary || translateField(post, 'excerpt', locale) || `Read about ${title} on AARI Work Designs.`;

  return {
    title: title,
    description: description,
    robots: {
      index: post.seo?.robotsIndex ?? true,
      follow: post.seo?.robotsFollow ?? true,
    },
    openGraph: {
      title: translateField(post.seo, 'ogTitle', locale) || title,
      description: translateField(post.seo, 'ogDescription', locale) || description,
      url: post.seo?.canonicalUrl || `https://aariworkdesigns.com/${locale}/blog/${slug}`,
      images: [{ url: image }],
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: [post.author?.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: translateField(post.seo, 'twitterTitle', locale) || title,
      description: translateField(post.seo, 'twitterDescription', locale) || description,
      images: [image],
    },
    alternates: {
      canonical: post.seo?.canonicalUrl || `https://aariworkdesigns.com/${locale}/blog/${slug}`,
      languages: {
        'x-default': `https://aariworkdesigns.com/en/blog/${slug}`,
        en: `https://aariworkdesigns.com/en/blog/${slug}`,
        hi: `https://aariworkdesigns.com/hi/blog/${slug}`,
        mr: `https://aariworkdesigns.com/mr/blog/${slug}`,
        ta: `https://aariworkdesigns.com/ta/blog/${slug}`,
        te: `https://aariworkdesigns.com/te/blog/${slug}`,
        es: `https://aariworkdesigns.com/es/blog/${slug}`,
        fr: `https://aariworkdesigns.com/fr/blog/${slug}`,
        ar: `https://aariworkdesigns.com/ar/blog/${slug}`,
        de: `https://aariworkdesigns.com/de/blog/${slug}`,
        pt: `https://aariworkdesigns.com/pt/blog/${slug}`,
        ja: `https://aariworkdesigns.com/ja/blog/${slug}`,
        ko: `https://aariworkdesigns.com/ko/blog/${slug}`,
      }
    },
    other: {
      'ai-summary': post.ai?.aiSummary || '',
      'tldr': post.ai?.tldr || '',
      'primary-entity': post.geo?.primaryEntity || '',
    }
  };
}

export default async function PostPage({ params }: { params: PageParams }) {
  const { locale, slug } = params;
  const dict = await getDictionary(locale);
  let post: any = null;
  
  try {
    const rawPost = await client.fetch(POST_QUERY, { slug });
    if (rawPost) {
      if (locale !== 'en') {
        const { translateDocument } = await import('@/lib/translate');
        post = await translateDocument(rawPost, locale);
      } else {
        post = rawPost;
      }
    }
  } catch (error) {
    console.error('Error fetching post:', error);
  }

  if (!post) {
    return (
      <div className="container" style={{ paddingTop: '200px', textAlign: 'center' }}>
        <h1>{dict.blog?.postNotFound || 'Post not found'}</h1>
      </div>
    );
  }

  const translatedTitle = translateField(post, 'title', locale);
  const translatedExcerpt = translateField(post, 'excerpt', locale);
  const translatedCategory = post.categories?.[0] ? translateField(post.categories[0], 'title', locale) : 'Tutorial';

  // Extract headings for TOC
  const headings = post.body
    ?.filter((block: any) => block._type === 'block' && ['h2', 'h3'].includes(block.style))
    .map((block: any) => ({
      id: block._key,
      text: block.children.map((c: any) => c.text).join(''),
      level: parseInt(block.style.replace('h', ''))
    })) || [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: translateField(post.seo, 'title', locale) || translatedTitle,
    image: post.mainImage ? urlFor(post.mainImage).url() : '',
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name,
    },
    description: translateField(post.seo, 'description', locale) || post.ai?.aiSummary || translatedExcerpt,
    keywords: post.geo?.semanticKeywords?.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.seo?.canonicalUrl || `https://aariworkdesigns.com/${locale}/blog/${slug}`,
    },
    ...(post.ai?.keyTakeaways && { abstract: post.ai.keyTakeaways.join('. ') }),
  };

  const faqJsonLd = post.ai?.faq?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.ai.faq.map((item: any) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      <Header />
      <ReadingProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      
      <article className={styles.post}>
        <header className={styles.header}>
          <div className="container">
            <div className={styles.meta}>
              <span className={styles.categoryBadge}>{translatedCategory}</span>
              <div className={styles.metaInfo}>
                <time className={styles.date}>
                  {new Date(post.publishedAt).toLocaleDateString(locale, {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
                <span className={styles.dot}>•</span>
                <span className={styles.readingTime}>{post.estimatedReadingTime || 5} {dict.blog?.minRead || 'min read'}</span>
              </div>
            </div>
            <h1 className={styles.title}>{translatedTitle}</h1>
            
            <div className={styles.heroAuthor}>
              {post.author?.image && (
                <Image
                  src={urlFor(post.author.image).width(100).height(100).url()}
                  alt={post.author.name}
                  width={56}
                  height={56}
                  className={styles.heroAuthorImage}
                />
              )}
              <div className={styles.heroAuthorInfo}>
                <span className={styles.heroAuthorName}>{post.author?.name}</span>
                <span className={styles.updatedAt}>{dict.blog?.lastUpdated || 'Last updated:'} {new Date(post._updatedAt).toLocaleDateString(locale)}</span>
              </div>
            </div>
          </div>
        </header>

        {post.mainImage?.asset && (
          <div className={styles.mainImageWrapper}>
            <Image
              src={urlFor(post.mainImage).width(1600).url()}
              alt={translatedTitle}
              width={1600}
              height={900}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              className={styles.mainImage}
              priority
            />
          </div>
        )}

        <div className={`${styles.mainContent} container`}>
          <aside className={styles.sidebar}>
            <TableOfContents headings={headings} />
          </aside>

          <div className={styles.articleBody}>
            {post.ai?.keyTakeaways && (
              <KeyTakeaways items={post.ai.keyTakeaways} />
            )}
            
            <div className={styles.richText}>
              <PortableText value={post.body} components={portableTextComponents} />
            </div>

            {post.ai?.faq && (
              <FaqSection faqs={post.ai.faq} />
            )}

            <AuthorBox author={post.author} />

            <div className={styles.endShare}>
              <h4 className={styles.shareCallout}>{dict.blog?.enjoyedArticle || 'Enjoyed this article? Share it with others!'}</h4>
              <ShareButtons 
                url={`https://aariworkdesigns.com/${locale}/blog/${slug}`} 
                title={translatedTitle} 
              />
            </div>

            <div className={styles.postFooter}>
              <h3 className={styles.relatedTitle}>{dict.blog?.continueLearning || 'Continue Learning'}</h3>
              <div className={styles.relatedGrid}>
                {post.relatedPosts?.slice(0, 6).map((related: any) => {
                  const relTitle = translateField(related, 'title', locale);
                  const relCategory = related.categories?.[0] ? translateField(related.categories[0], 'title', locale) : '';
                  return (
                    <Link key={related._id} href={`/${locale}/blog/${related.slug.current}`} className={styles.relatedCard}>
                      <div className={styles.relatedThumb}>
                        {related.mainImage && (
                          <Image 
                            src={urlFor(related.mainImage).width(400).height(250).url()} 
                            alt={relTitle}
                            width={300}
                            height={180}
                          />
                        )}
                      </div>
                      <div className={styles.relatedInfo}>
                        {relCategory && <span className={styles.relatedCategory}>{relCategory}</span>}
                        <h4 className={styles.relatedItemTitle}>{relTitle}</h4>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer subtext={dict.footer?.defaultSubtext || "Elevating the art of embroidery."} />
    </>
  );
}
