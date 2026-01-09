import styles from './products.module.css';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { products, productCategories } from '@/lib/data';

export const metadata = {
    title: 'Products - Sollant Air Compressor',
    description: 'Explore our complete range of industrial air compressors including oil-injected, oil-free, portable, and specialty compressors.',
};

export default function ProductsPage() {
    return (
        <div className={styles.productsPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Our Products</span>
                        <h1>Industrial Air Compressor Solutions</h1>
                        <p>
                            Discover our comprehensive range of high-quality air compressors
                            designed for various industrial applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className={styles.categories}>
                <div className="container">
                    <div className={styles.categoryGrid}>
                        {productCategories.map((category) => (
                            <a key={category.id} href={`#${category.id}`} className={styles.categoryCard}>
                                <span className={styles.categoryIcon}>{category.icon}</span>
                                <span className={styles.categoryName}>{category.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className={`section ${styles.productsSection}`}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header__title">All Products</h2>
                        <p className="section-header__subtitle">
                            Browse our complete product catalog
                        </p>
                    </div>

                    <div className={styles.productGrid}>
                        {products.map((product) => (
                            <Card
                                key={product.id}
                                type="product"
                                title={product.name}
                                description={product.description}
                                image={product.image}
                                link={`/products/${product.id}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Need Help Choosing the Right Compressor?</h2>
                        <p>Our technical team is ready to help you find the perfect solution for your needs</p>
                        <div className={styles.ctaButtons}>
                            <Button href="/contact" size="lg">Get Expert Advice</Button>
                            <Button href="tel:+86-15800679965" variant="outline" size="lg">
                                Call Us Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
