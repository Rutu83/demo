import styles from './videos.module.css';
import { products } from '@/lib/data';
import Link from 'next/link';

export const metadata = {
    title: 'Product Videos - Sollant Air Compressor',
    description: 'Watch our product demonstration videos and factory tour to see Sollant air compressors in action.',
};

// Get all products that have videos
const productVideos = products
    .filter((product) => product.video)
    .map((product) => ({
        id: product.id,
        title: product.name,
        description: product.description,
        video: product.video,
        poster: product.image,
    }));

export default function VideosPage() {
    return (
        <div className={styles.videosPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Product Videos</span>
                        <h1>See Our Products in Action</h1>
                        <p>
                            Watch demonstration videos, factory tours, and technical guides
                            to learn more about INDUSAIR air compressors.
                        </p>
                    </div>
                </div>
            </section>

            {/* Videos Grid */}
            <section className={`section ${styles.videos}`}>
                <div className="container">
                    <div className={styles.grid}>
                        {productVideos.map((videoItem) => (
                            <div key={videoItem.id} className={styles.videoCard}>
                                <div className={styles.videoWrapper}>
                                    <video
                                        controls
                                        poster={videoItem.poster}
                                        className={styles.videoPlayer}
                                    >
                                        <source src={videoItem.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className={styles.videoInfo}>
                                    <h3>{videoItem.title}</h3>
                                    <p>{videoItem.description}</p>
                                    <Link href={`/products/${videoItem.id}`} className={styles.viewProduct}>
                                        View Product →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {productVideos.length === 0 && (
                        <div className={styles.noVideos}>
                            <p>No product videos available at this time.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
