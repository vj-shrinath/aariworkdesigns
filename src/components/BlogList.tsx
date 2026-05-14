import PostCard from './PostCard';
import styles from './BlogList.module.css';

interface BlogListProps {
  posts: any[];
}

export default function BlogList({ posts }: BlogListProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className={styles.empty}>
        <h3>No posts found</h3>
        <p>Stay tuned for upcoming stories.</p>
      </div>
    );
  }

  return (
    <section className={`${styles.section} container`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Latest <span className="text-gradient">Stories</span></h2>
        <div className={styles.filters}>
          <button className={styles.active}>All</button>
          <button>Design</button>
          <button>Code</button>
          <button>Future</button>
        </div>
      </div>
      <div className={styles.grid}>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}
