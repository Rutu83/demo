import styles from './about.module.css';
import Button from '@/components/ui/Button';
import { coreValues, productionSteps, qualityMeasures, teamMembers } from '@/lib/data';

export const metadata = {
    title: 'About Us - Sollant Air Compressor',
    description: 'Learn about Sollant, a professional air compressor manufacturer with 20+ years experience. Discover our mission, values, and commitment to quality.',
};

export default function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>About Sollant</span>
                        <h1>Professional Air Compressor Manufacturer Since 2004</h1>
                        <p>
                            For over two decades, Sollant has been at the forefront of industrial air compressor
                            manufacturing, delivering high-quality, reliable solutions to businesses worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className={`section ${styles.mission}`}>
                <div className="container">
                    <div className={styles.missionGrid}>
                        <div className={styles.missionContent}>
                            <h2>Our Mission</h2>
                            <p>
                                To provide industrial clients worldwide with the most reliable, energy-efficient,
                                and cost-effective air compression solutions. We are committed to continuous innovation,
                                exceptional quality, and outstanding customer service.
                            </p>
                            <p>
                                At Sollant, we believe that every business deserves access to premium industrial equipment
                                at competitive prices. Our mission drives us to constantly improve our products and
                                services to exceed customer expectations.
                            </p>
                            <Button href="/contact">Contact Sollant Team</Button>
                        </div>
                        <div className={styles.videoWrapper}>
                            <div className={styles.videoPlaceholder}>
                                <span className={styles.playIcon}>▶</span>
                                <p>Company Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className={`section ${styles.values}`}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header__title">Our Core Values</h2>
                        <p className="section-header__subtitle">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className={styles.valuesGrid}>
                        {coreValues.map((value, index) => (
                            <div key={index} className={styles.valueCard}>
                                <div className={styles.valueNumber}>0{index + 1}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Factory Tour */}
            <section className={`section ${styles.factory}`}>
                <div className="container">
                    <div className={styles.factoryHeader}>
                        <h2>Sollant is a Reliable Supplier of Air Compressors</h2>
                        <p>
                            Our state-of-the-art 15,000 m² manufacturing facility in Shanghai is equipped
                            with the latest production technology and quality control systems.
                        </p>
                    </div>

                    <div className={styles.factoryGrid}>
                        <div className={styles.factoryFeature}>
                            <span className={styles.factoryIcon}>🔬</span>
                            <h4>Continuous Innovation</h4>
                            <p>R&D team constantly developing new and improved products</p>
                        </div>
                        <div className={styles.factoryFeature}>
                            <span className={styles.factoryIcon}>✅</span>
                            <h4>High Quality Service</h4>
                            <p>ISO 9001 certified quality management system</p>
                        </div>
                        <div className={styles.factoryFeature}>
                            <span className={styles.factoryIcon}>🤝</span>
                            <h4>Win-Win Cooperation</h4>
                            <p>Building long-term partnerships with global clients</p>
                        </div>
                        <div className={styles.factoryFeature}>
                            <span className={styles.factoryIcon}>💡</span>
                            <h4>Perfect Solutions</h4>
                            <p>Customized solutions for specific requirements</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Production Process */}
            <section className={`section ${styles.process}`}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header__title">Our Production Process</h2>
                        <p className="section-header__subtitle">
                            From raw materials to finished product - quality at every step
                        </p>
                    </div>

                    <div className={styles.processSteps}>
                        {productionSteps.map((step) => (
                            <div key={step.step} className={styles.processStep}>
                                <div className={styles.stepNumber}>{step.step}</div>
                                <div className={styles.stepContent}>
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Control */}
            <section className={`section ${styles.quality}`}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header__title">Quality Control</h2>
                        <p className="section-header__subtitle">
                            ISO 9001:2000 certified with comprehensive quality measures
                        </p>
                    </div>

                    <div className={styles.qualityGrid}>
                        {qualityMeasures.map((measure, index) => (
                            <div key={index} className={styles.qualityItem}>
                                <span className={styles.checkIcon}>✓</span>
                                {measure}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={`section ${styles.team}`}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header__title">Our Team</h2>
                        <p className="section-header__subtitle">
                            Meet the dedicated professionals behind Sollant
                        </p>
                    </div>

                    <div className={styles.teamGrid}>
                        {teamMembers.map((member, index) => (
                            <div key={index} className={styles.teamCard}>
                                <div className={styles.teamAvatar}>
                                    <span>{member.name.charAt(0)}</span>
                                </div>
                                <h4>{member.name}</h4>
                                <p className={styles.teamPosition}>{member.position}</p>
                                <div className={styles.teamContact}>
                                    <a href={`mailto:${member.email}`}>📧 {member.email}</a>
                                    <a href={`tel:${member.phone}`}>📞 {member.phone}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Ready to Partner with Us?</h2>
                        <p>Contact our team today to discuss your air compressor needs</p>
                        <div className={styles.ctaButtons}>
                            <Button href="/contact" size="lg">Get in Touch</Button>
                            <Button href="/products" variant="white" size="lg">View Products</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
