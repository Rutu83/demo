import styles from './videos.module.css';

export const metadata = {
    title: 'Product Videos - Sollant Air Compressor',
    description: 'Watch our product demonstration videos and factory tour to see Sollant air compressors in action.',
};

const videos = [
    { id: 1, title: 'Sollant Factory Tour', description: 'Take a virtual tour of our 15,000 m² manufacturing facility' },
    { id: 2, title: 'Screw Compressor Installation', description: 'Complete installation guide for our screw air compressors' },
    { id: 3, title: 'VSD Compressor Technology', description: 'Understanding variable speed drive technology' },
    { id: 4, title: 'Oil-Free Compressor Features', description: 'Features and benefits of our oil-free compressor range' },
    { id: 5, title: 'Maintenance Guide', description: 'Step-by-step maintenance tutorial for long compressor life' },
    { id: 6, title: 'Quality Control Process', description: 'See our rigorous quality testing procedures' },
    { id: 7, title: 'Customer Testimonials', description: 'Hear from our satisfied customers worldwide' },
    { id: 8, title: 'Product Comparison', description: 'Compare different compressor models for your needs' },
];

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
                            to learn more about Sollant air compressors.
                        </p>
                    </div>
                </div>
            </section>

            {/* Videos Grid */}
            <section className={`section ${styles.videos}`}>
                <div className="container">
                    <div className={styles.grid}>
                        {videos.map((video) => (
                            <div key={video.id} className={styles.videoCard}>
                                <div className={styles.videoWrapper}>
                                    <div className={styles.videoPlaceholder}>
                                        <span className={styles.playButton}>▶</span>
                                    </div>
                                </div>
                                <div className={styles.videoInfo}>
                                    <h3>{video.title}</h3>
                                    <p>{video.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
