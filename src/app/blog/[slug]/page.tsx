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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className={styles.post}>

        <header className={styles.header}>
          <div className="container">
            <div className={styles.meta}>
              <span className={styles.category}>{post.categories?.[0]?.title}</span>
              <time className={styles.date}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.author}>
              {post.author?.image && (
                <Image
                  src={urlFor(post.author.image).width(100).height(100).url()}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className={styles.authorImage}
                />
              )}
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{post.author?.name}</span>
                <span className={styles.authorBio}>{post.author?.bio}</span>
              </div>
            </div>
          </div>
        </header>

        {post.mainImage?.asset ? (
          <div className={styles.mainImageWrapper}>
            <Image
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={post.title}
              width={1200}
              height={600}
              className={styles.mainImage}
              priority
            />
          </div>
        ) : (
          <div className={styles.mainImagePlaceholder}>
            <p>No main image provided for this post.</p>
          </div>
        )}


        <div className={`${styles.content} container`}>
          <div className={styles.richText}>
            <PortableText value={post.body} components={portableTextComponents} />
          </div>
          
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className={styles.relatedPosts}>
              <h3>Related Designs & Patterns</h3>
              <div className={styles.relatedGrid}>
                {post.relatedPosts.map((related: any) => (
                  <Link key={related._id} href={`/blog/${related.slug.current}`} className={styles.relatedCard}>
                    {related.mainImage && (
                      <Image 
                        src={urlFor(related.mainImage).width(300).height(200).url()} 
                        alt={related.title}
                        width={300}
                        height={200}
                      />
                    )}
                    <span>{related.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <ShareButtons 
            url={`https://aariworkdesigns.com/blog/${params.slug}`} 
            title={post.title} 
          />
        </div>


      </article>
    </>
  );
}
