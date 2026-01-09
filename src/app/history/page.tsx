import styles from './history.module.css';
import Button from '@/components/ui/Button';

export const metadata = {
    title: 'Company History - Sollant Air Compressor',
    description: 'Learn about Sollant\'s journey from a small workshop to a leading air compressor manufacturer.',
};

const milestones = [
    { year: '2004', title: 'Company Founded', description: 'Sollant was established in Shanghai, China with a small team dedicated to manufacturing quality air compressors.' },
    { year: '2007', title: 'First Export', description: 'Successfully shipped our first container of air compressors to Southeast Asia, marking the beginning of our international journey.' },
    { year: '2010', title: 'ISO Certification', description: 'Achieved ISO 9001:2000 certification, demonstrating our commitment to quality management systems.' },
    { year: '2012', title: 'Factory Expansion', description: 'Expanded our manufacturing facility to 8,000 m² to meet growing international demand.' },
    { year: '2015', title: '50+ Countries', description: 'Reached a milestone of exporting to over 50 countries across 6 continents.' },
    { year: '2017', title: 'R&D Center', description: 'Established a dedicated Research & Development center for continuous product innovation.' },
    { year: '2019', title: 'New Factory', description: 'Opened our state-of-the-art 15,000 m² manufacturing facility with 4 production lines.' },
    { year: '2021', title: 'Oil-Free Launch', description: 'Launched our comprehensive oil-free compressor product line for sensitive industries.' },
    { year: '2023', title: '20th Anniversary', description: 'Celebrated 20 years of excellence, serving over 10,000 customers worldwide.' },
    { year: '2024', title: 'Smart Technology', description: 'Introduced IoT-enabled smart compressors with remote monitoring capabilities.' },
];

export default function HistoryPage() {
    return (
        <div className={styles.historyPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Our Journey</span>
                        <h1>20 Years of Excellence</h1>
                        <p>
                            From a small workshop to a global leader in air compressor manufacturing -
                            discover the Sollant story.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className={`section ${styles.timeline}`}>
                <div className="container">
                    <div className={styles.timelineWrapper}>
                        {milestones.map((milestone, index) => (
                            <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
                                <div className={styles.timelineContent}>
                                    <span className={styles.year}>{milestone.year}</span>
                                    <h3>{milestone.title}</h3>
                                    <p>{milestone.description}</p>
                                </div>
                                <div className={styles.timelineDot}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className={styles.stats}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>20+</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>50+</span>
                            <span className={styles.statLabel}>Countries Served</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>10K+</span>
                            <span className={styles.statLabel}>Happy Customers</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>200+</span>
                            <span className={styles.statLabel}>Team Members</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Be Part of Our Next Chapter</h2>
                        <p>Join thousands of satisfied customers and partners worldwide</p>
                        <div className={styles.ctaButtons}>
                            <Button href="/contact" size="lg">Contact Us</Button>
                            <Button href="/distributor" variant="outline" size="lg">Become a Partner</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
