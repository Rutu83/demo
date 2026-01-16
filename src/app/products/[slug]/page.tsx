import { notFound } from 'next/navigation';
import styles from './product.module.css';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import ProductGallery from '@/components/ui/ProductGallery';
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
                            <ProductGallery
                                mainImage={product.image}
                                gallery={product.gallery || []}
                                productName={product.name}
                            />
                        </div>

                        <div className={styles.productInfo}>
                            <span className={styles.category}>{product.category}</span>
                            <h1>{product.name}</h1>
                            <p className={styles.description}>{product.description}</p>

                            <div className={styles.features}>
                                {product.features && product.features.map((feature, i) => (
                                    <div key={i} className={styles.feature}>
                                        <span className={styles.featureIcon}>✓</span>
                                        <span>{feature}</span>
                                    </div>
                                ))}
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
                                {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                                    <tr key={key}>
                                        <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                                        <td>{String(value)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Product Video */}
            {product.video && (
                <section className={`section ${styles.videoSection}`}>
                    <div className="container">
                        <h2>Product Video</h2>
                        <div className={styles.videoWrapper}>
                            <video
                                controls
                                poster={product.image}
                                className={styles.productVideo}
                            >
                                <source src={product.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </section>
            )}

            {/* Applications */}
            <section className={`section ${styles.applications}`}>
                <div className="container">
                    <h2>Applications</h2>
                    <div className={styles.appGrid}>
                        {product.applications && product.applications.map((app, i) => (
                            <div key={i} className={styles.appCard}>
                                <span>{['🏭', '🔧', '🏗️', '💊', '🍔', '💻', '🧪', '🚗'][i % 8]}</span>
                                <h4>{app}</h4>
                            </div>
                        ))}
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
                                    <img src={p.image} alt={p.name} />
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
