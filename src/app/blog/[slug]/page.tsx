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

export const runtime = 'edge'
export const revalidate = 3600; // Revalidate every hour


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await client.fetch(POST_QUERY, { slug: params.slug });
  if (!post) return { title: 'Post Not Found' };

  const ogImageSource = getSeoImage(post);
  const image = ogImageSource ? urlFor(ogImageSource).width(1200).height(630).url() : '';

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.ai?.aiSummary || post.excerpt || `Read about ${post.title} on AARI Work Designs.`,
    robots: {
      index: post.seo?.robotsIndex ?? true,
      follow: post.seo?.robotsFollow ?? true,
    },
    openGraph: {
      title: post.seo?.ogTitle || post.seo?.title || post.title,
      description: post.seo?.ogDescription || post.seo?.description || post.ai?.aiSummary || post.excerpt,
      url: post.seo?.canonicalUrl || `https://aariworkdesigns.com/blog/${params.slug}`,
      images: [{ url: image }],
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: [post.author?.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.twitterTitle || post.seo?.title || post.title,
      description: post.seo?.twitterDescription || post.seo?.description || post.ai?.aiSummary || post.excerpt,
      images: [image],
    },
    alternates: {
      canonical: post.seo?.canonicalUrl || `https://aariworkdesigns.com/blog/${params.slug}`,
    },
    other: {
      'ai-summary': post.ai?.aiSummary || '',
      'tldr': post.ai?.tldr || '',
      'primary-entity': post.geo?.primaryEntity || '',
    }
  };
}



export default async function PostPage({ params }: { params: { slug: string } }) {
  let post: any = null;
  
  try {
    post = await client.fetch(POST_QUERY, { slug: params.slug });
  } catch (error) {
    console.error('Error fetching post:', error);
  }

  if (!post) return <div className="container" style={{ paddingTop: '200px', textAlign: 'center' }}><h1>Post not found</h1></div>;

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
    headline: post.seo?.title || post.title,
    image: post.mainImage ? urlFor(post.mainImage).url() : '',
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name,
    },
    description: post.seo?.description || post.ai?.aiSummary || post.excerpt,
    keywords: post.geo?.semanticKeywords?.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.seo?.canonicalUrl || `https://aariworkdesigns.com/blog/${params.slug}`,
    },
    ...(post.ai?.keyTakeaways && { abstract: post.ai.keyTakeaways.join('. ') }),
  };

  return (
    <>
      <Header />
      <ReadingProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className={styles.post}>
        <header className={styles.header}>
          <div className="container">
            <div className={styles.meta}>
              <span className={styles.categoryBadge}>{post.categories?.[0]?.title || 'Tutorial'}</span>
              <div className={styles.metaInfo}>
                <time className={styles.date}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
                <span className={styles.dot}>•</span>
                <span className={styles.readingTime}>{post.estimatedReadingTime || 5} min read</span>
              </div>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            
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
                <span className={styles.updatedAt}>Last updated: {new Date(post._updatedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </header>

        {post.mainImage?.asset && (
          <div className={styles.mainImageWrapper}>
            <Image
              src={urlFor(post.mainImage).width(1600).url()}
              alt={post.title}
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
              <h4 className={styles.shareCallout}>Enjoyed this article? Share it with others!</h4>
              <ShareButtons 
                url={`https://aariworkdesigns.com/blog/${params.slug}`} 
                title={post.title} 
              />
            </div>

            <div className={styles.postFooter}>
              <h3 className={styles.relatedTitle}>Continue Learning</h3>
              <div className={styles.relatedGrid}>
                {post.relatedPosts?.slice(0, 6).map((related: any) => (
                  <Link key={related._id} href={`/blog/${related.slug.current}`} className={styles.relatedCard}>
                    <div className={styles.relatedThumb}>
                      {related.mainImage && (
                        <Image 
                          src={urlFor(related.mainImage).width(400).height(250).url()} 
                          alt={related.title}
                          width={300}
                          height={180}
                        />
                      )}
                    </div>
                    <div className={styles.relatedInfo}>
                      <span className={styles.relatedCategory}>{related.categories?.[0]?.title}</span>
                      <h4 className={styles.relatedItemTitle}>{related.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer subtext="Elevating the art of embroidery." />
    </>
  );
}
