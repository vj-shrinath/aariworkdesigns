import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: any;
}

export default function PostCard({ post }: PostCardProps) {
  const imageUrl = post.mainImage?.asset 
    ? urlFor(post.mainImage).width(600).height(400).url() 
    : null;

  if (!imageUrl) {
    console.log(`No image asset found for post: ${post.title}`, post.mainImage);
  }

  return (
    <article className={styles.card}>
      <Link href={`/blog/${post.slug.current}`} className={styles.imageWrapper}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title}
            width={600}
            height={400}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            <span>No Image</span>
          </div>
        )}
      </Link>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>
            {post.categories?.[0]?.title || 'Insight'}
          </span>
          <span className={styles.date}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>
        <Link href={`/blog/${post.slug.current}`}>
          <h3 className={styles.title}>{post.title}</h3>
        </Link>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.footer}>
          <div className={styles.author}>
            {post.author?.image && (
              <Image
                src={urlFor(post.author.image).width(40).height(40).url()}
                alt={post.author.name}
                width={32}
                height={32}
                className={styles.authorImage}
              />
            )}
            <span className={styles.authorName}>{post.author?.name}</span>
          </div>
          <Link href={`/blog/${post.slug.current}`} className={styles.readMore}>
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}
