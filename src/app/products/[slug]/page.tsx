import { notFound } from 'next/navigation';
import styles from './product.module.css';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import { products, faqs } from '@/lib/data';

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.id,
    }));
}

export async function generateMetadata({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.id === slug);

    if (!product) {
        return {
            title: 'Product Not Found - Sollant',
        };
    }

    return {
        title: `${product.name} - Sollant Air Compressor`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.id === slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);
    const productFaqs = faqs.slice(0, 5);

    return (
        <div className={styles.productPage}>
            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
                <div className="container">
                    <a href="/">Home</a>
                    <span>/</span>
                    <a href="/products">Products</a>
                    <span>/</span>
                    <span>{product.name}</span>
                </div>
            </div>

            {/* Product Hero */}
            <section className={styles.productHero}>
                <div className="container">
                    <div className={styles.heroGrid}>
                        <div className={styles.productImage}>
                            <div className={styles.imagePlaceholder}>
                                <span>🔧</span>
                            </div>
                            <div className={styles.thumbnails}>
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={styles.thumbnail}>
                                        <span>🔧</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.productInfo}>
                            <span className={styles.category}>{product.category}</span>
                            <h1>{product.name}</h1>
                            <p className={styles.description}>{product.description}</p>

                            <div className={styles.features}>
                                <div className={styles.feature}>
                                    <span className={styles.featureIcon}>✓</span>
                                    <span>High Efficiency Motor</span>
                                </div>
                                <div className={styles.feature}>
                                    <span className={styles.featureIcon}>✓</span>
                                    <span>Low Noise Operation</span>
                                </div>
                                <div className={styles.feature}>
                                    <span className={styles.featureIcon}>✓</span>
                                    <span>Energy Saving Design</span>
                                </div>
                                <div className={styles.feature}>
                                    <span className={styles.featureIcon}>✓</span>
                                    <span>Easy Maintenance</span>
                                </div>
                            </div>

                            <div className={styles.ctas}>
                                <Button href="/contact" size="lg">Request a Quote</Button>
                                <Button href="tel:+86-15800679965" variant="outline" size="lg">
                                    📞 Call Now
                                </Button>
                            </div>

                            <div className={styles.warranty}>
                                <span>🛡️</span>
                                <span>1-2 Year Warranty | 24/7 Technical Support | Free Consultation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specifications */}
            <section className={`section ${styles.specifications}`}>
                <div className="container">
                    <h2>Technical Specifications</h2>
                    <div className={styles.specTable}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Model</td>
                                    <td>SL-{product.id.toUpperCase()}-75</td>
                                </tr>
                                <tr>
                                    <td>Power</td>
                                    <td>75 kW / 100 HP</td>
                                </tr>
                                <tr>
                                    <td>Working Pressure</td>
                                    <td>7-13 bar</td>
                                </tr>
                                <tr>
                                    <td>Free Air Delivery</td>
                                    <td>10-14 m³/min</td>
                                </tr>
                                <tr>
                                    <td>Noise Level</td>
                                    <td>68 ± 2 dB(A)</td>
                                </tr>
                                <tr>
                                    <td>Cooling Method</td>
                                    <td>Air Cooled</td>
                                </tr>
                                <tr>
                                    <td>Dimensions (L×W×H)</td>
                                    <td>1800 × 1100 × 1650 mm</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>1200 kg</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className={`section ${styles.applications}`}>
                <div className="container">
                    <h2>Applications</h2>
                    <div className={styles.appGrid}>
                        <div className={styles.appCard}>
                            <span>🏭</span>
                            <h4>Manufacturing</h4>
                        </div>
                        <div className={styles.appCard}>
                            <span>🔧</span>
                            <h4>Automotive</h4>
                        </div>
                        <div className={styles.appCard}>
                            <span>🏗️</span>
                            <h4>Construction</h4>
                        </div>
                        <div className={styles.appCard}>
                            <span>💊</span>
                            <h4>Pharmaceutical</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className={`section ${styles.faqSection}`}>
                <div className="container">
                    <h2>Frequently Asked Questions</h2>
                    <div className={styles.faqWrapper}>
                        <Accordion items={productFaqs} />
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className={`section ${styles.related}`}>
                <div className="container">
                    <h2>Related Products</h2>
                    <div className={styles.relatedGrid}>
                        {relatedProducts.map((p) => (
                            <a key={p.id} href={`/products/${p.id}`} className={styles.relatedCard}>
                                <div className={styles.relatedImage}>
                                    <span>🔧</span>
                                </div>
                                <h4>{p.name}</h4>
                                <span className={styles.viewMore}>View Details →</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
