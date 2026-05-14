import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import styles from './Gallery.module.css';

interface GalleryProps {
  items: any[];
}

export default function Gallery({ items }: GalleryProps) {
  if (!items || items.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No images found in your blog posts.</p>
      </div>
    );
  }

  return (
    <section className={styles.gallery}>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item._id} className={styles.item}>
            <Link href={`/blog/${item.slug.current}`} className={styles.imageLink}>
              <Image
                src={urlFor(item.mainImage).width(800).height(800).url()}
                alt={item.title}
                width={400}
                height={400}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.viewLink}>View Article</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
