import styles from './Applications.module.css';
import { applications } from '@/lib/data';

export default function Applications() {
    return (
        <section className={`section ${styles.applications}`}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-header__title">Sollant Air Compressor Applications</h2>
                    <p className="section-header__subtitle">
                        Our air compressors are trusted across diverse industries worldwide,
                        powering critical operations in manufacturing, construction, and more.
                    </p>
                </div>

                <div className={styles.grid}>
                    {applications.map((app) => (
                        <div key={app.id} className={styles.appCard}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.imagePlaceholder}>
                                    <span>🏭</span>
                                </div>
                                <div className={styles.overlay}>
                                    <h3 className={styles.appTitle}>{app.title}</h3>
                                    <p className={styles.appDesc}>Air compressor solutions for {app.title.toLowerCase()} industry</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
