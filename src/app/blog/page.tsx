import styles from './blog.module.css';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { blogPosts } from '@/lib/data';

export const metadata = {
    title: 'Blog - Sollant Air Compressor',
    description: 'Expert guides and tips about air compressors. Learn how to choose, maintain, and optimize your industrial air compressor systems.',
};

const extendedPosts = [
    ...blogPosts,
    {
        id: 4,
        title: 'Top 10 Benefits of Oil-Free Air Compressors',
        excerpt: 'Discover why oil-free compressors are essential for pharmaceutical and food industries.',
        image: '/images/blog/post4.jpg',
        date: '2024-01-01',
        slug: 'benefits-oil-free-compressors',
    },
    {
        id: 5,
        title: 'Understanding Air Compressor Energy Efficiency',
        excerpt: 'Learn how to reduce energy costs and improve the efficiency of your compressed air system.',
        image: '/images/blog/post5.jpg',
        date: '2023-12-28',
        slug: 'energy-efficiency-guide',
    },
    {
        id: 6,
        title: 'How to Import Air Compressors from China',
        excerpt: 'Step-by-step guide to importing industrial equipment from Chinese manufacturers.',
        image: '/images/blog/post6.jpg',
        date: '2023-12-20',
        slug: 'import-from-china-guide',
    },
];

export default function BlogPage() {
    return (
        <div className={styles.blogPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Our Blog</span>
                        <h1>Expert Guides & Industry Insights</h1>
                        <p>
                            Stay updated with the latest air compressor technology, maintenance tips,
                            and industry best practices.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className={`section ${styles.featured}`}>
                <div className="container">
                    <div className={styles.featuredPost}>
                        <div className={styles.featuredImage}>
                            <div className={styles.imagePlaceholder}>
                                <span>📰</span>
                            </div>
                        </div>
                        <div className={styles.featuredContent}>
                            <span className={styles.featuredBadge}>Featured</span>
                            <h2>{blogPosts[0].title}</h2>
                            <p>{blogPosts[0].excerpt}</p>
                            <Button href={`/blog/${blogPosts[0].slug}`}>Read Full Article</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Posts */}
            <section className={`section ${styles.posts}`}>
                <div className="container">
                    <div className={styles.postsGrid}>
                        <div className={styles.mainContent}>
                            <div className={styles.grid}>
                                {extendedPosts.map((post) => (
                                    <Card
                                        key={post.id}
                                        type="blog"
                                        title={post.title}
                                        description={post.excerpt}
                                        image={post.image}
                                        link={`/blog/${post.slug}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <aside className={styles.sidebar}>
                            <div className={styles.subscribeBox}>
                                <h3>Subscribe to Our Newsletter</h3>
                                <p>Get the latest articles and industry updates delivered to your inbox.</p>
                                <form className={styles.subscribeForm}>
                                    <input type="email" placeholder="Your email address" />
                                    <Button type="submit" fullWidth>Subscribe</Button>
                                </form>
                            </div>

                            <div className={styles.categoriesBox}>
                                <h3>Categories</h3>
                                <ul>
                                    <li><a href="#">Buying Guide</a></li>
                                    <li><a href="#">Maintenance Tips</a></li>
                                    <li><a href="#">Industry News</a></li>
                                    <li><a href="#">Technical Guides</a></li>
                                    <li><a href="#">Import/Export</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
