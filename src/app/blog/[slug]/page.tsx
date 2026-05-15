import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

import { client } from '@/sanity/client';
import { POST_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { portableTextComponents } from '@/sanity/lib/portableText';
import Header from '@/components/Header';
import ShareButtons from '@/components/ShareButtons';
import styles from './PostPage.module.css';

export const runtime = 'edge'


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await client.fetch(POST_QUERY, { slug: params.slug });
  if (!post) return { title: 'Post Not Found' };

  const image = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : '';

  return {
    title: post.title,
    description: post.excerpt || `Read about ${post.title} on AARI Work Designs.`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://aariworkdesigns.com/blog/${params.slug}`,
      images: [{ url: image }],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author?.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
    alternates: {
      canonical: `https://aariworkdesigns.com/blog/${params.slug}`,
    },
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
    headline: post.title,
    image: post.mainImage ? urlFor(post.mainImage).url() : '',
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name,
    },
    description: post.excerpt,
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
          <ShareButtons 
            url={`https://aariworkdesigns.com/blog/${params.slug}`} 
            title={post.title} 
          />
        </div>


      </article>
    </>
  );
}
