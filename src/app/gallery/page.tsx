import styles from './gallery.module.css';
import Button from '@/components/ui/Button';

export const metadata = {
    title: 'Project Gallery - Sollant Air Compressor',
    description: 'View our project gallery showcasing successful air compressor installations worldwide.',
};

const galleryItems = [
    { id: 1, title: 'Manufacturing Plant - USA', category: 'Industrial' },
    { id: 2, title: 'Construction Site - UAE', category: 'Construction' },
    { id: 3, title: 'Pharmaceutical Factory - Germany', category: 'Pharmaceutical' },
    { id: 4, title: 'Food Processing - Australia', category: 'Food & Beverage' },
    { id: 5, title: 'Mining Operation - South Africa', category: 'Mining' },
    { id: 6, title: 'Automotive Plant - Mexico', category: 'Automotive' },
    { id: 7, title: 'Textile Factory - India', category: 'Textile' },
    { id: 8, title: 'Electronics Factory - Japan', category: 'Electronics' },
    { id: 9, title: 'Oil & Gas - Saudi Arabia', category: 'Energy' },
    { id: 10, title: 'Chemical Plant - Brazil', category: 'Chemical' },
    { id: 11, title: 'Steel Mill - China', category: 'Industrial' },
    { id: 12, title: 'Cement Factory - Egypt', category: 'Construction' },
];

export default function GalleryPage() {
    return (
        <div className={styles.galleryPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Project Gallery</span>
                        <h1>Our Successful Installations</h1>
                        <p>
                            Explore our portfolio of air compressor installations across
                            various industries and countries worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className={`section ${styles.gallery}`}>
                <div className="container">
                    <div className={styles.filters}>
                        <button className={styles.filterActive}>All</button>
                        <button>Industrial</button>
                        <button>Construction</button>
                        <button>Pharmaceutical</button>
                        <button>Food & Beverage</button>
                    </div>

                    <div className={styles.grid}>
                        {galleryItems.map((item) => (
                            <div key={item.id} className={styles.galleryItem}>
                                <div className={styles.imageWrapper}>
                                    <div className={styles.imagePlaceholder}>
                                        <span>🏭</span>
                                    </div>
                                    <div className={styles.overlay}>
                                        <h3>{item.title}</h3>
                                        <span className={styles.category}>{item.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Want to See Your Project Here?</h2>
                        <p>Partner with us and join our growing list of satisfied clients</p>
                        <Button href="/contact" size="lg">Start Your Project</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
