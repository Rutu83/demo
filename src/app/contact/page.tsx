'use client';

import { useState } from 'react';
import styles from './contact.module.css';
import Button from '@/components/ui/Button';
import { countries } from '@/lib/data';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <div className={styles.contactPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Contact Us</span>
                        <h1>Get in Touch with Sollant</h1>
                        <p>Have questions? We're here to help. Reach out to our team.</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={`section ${styles.contactSection}`}>
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Left Side - Info */}
                        <div className={styles.contactInfo}>
                            <h2>The Best Air Compressor Manufacturer</h2>
                            <p className={styles.infoSubtitle}>
                                Partner with Sollant for premium quality air compressors at competitive prices.
                            </p>

                            <ul className={styles.valueList}>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    Give you competitive factory-direct prices
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    Show best pre-sale and after-sale service
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    Provide 24/7 technical support
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    Help you earn bigger market share
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    Cooperate for long-term business growth
                                </li>
                            </ul>

                            <div className={styles.contactCards}>
                                <div className={styles.contactCard}>
                                    <span className={styles.cardIcon}>📧</span>
                                    <h4>Email Us</h4>
                                    <a href="mailto:info@sollant.com">info@sollant.com</a>
                                </div>
                                <div className={styles.contactCard}>
                                    <span className={styles.cardIcon}>📞</span>
                                    <h4>Call Us</h4>
                                    <a href="tel:+86-15800679965">+86-15800679965</a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className={styles.formWrapper}>
                            <h3>Send Us Enquiry</h3>

                            {isSubmitted ? (
                                <div className={styles.successMessage}>
                                    <span className={styles.successIcon}>✓</span>
                                    <h4>Thank You!</h4>
                                    <p>Your message has been sent. We'll get back to you within 24 hours.</p>
                                    <Button onClick={() => setIsSubmitted(false)}>Send Another</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Your Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Your Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className={styles.input}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="phone">Your Phone *</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className={styles.input}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="country">Your Country *</label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            required
                                            className={styles.select}
                                        >
                                            <option value="">Select your country</option>
                                            {countries.map((country) => (
                                                <option key={country} value={country}>{country}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={styles.textarea}
                                            rows={5}
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>

                                    <Button type="submit" fullWidth size="lg">
                                        {isSubmitting ? 'Sending...' : 'Submit Your Requirements'}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className={`section ${styles.locations}`}>
                <div className="container">
                    <h2 className={styles.locationsTitle}>Our Locations</h2>
                    <div className={styles.locationsGrid}>
                        <div className={styles.locationCard}>
                            <div className={styles.locationBadge}>HEAD QUARTER</div>
                            <h4>Shanghai, China</h4>
                            <p>
                                No. 2299 Minkang Road,<br />
                                Minhang District,<br />
                                Shanghai, China 201108
                            </p>
                            <div className={styles.locationContact}>
                                <span>📞 +86-15800679965</span>
                                <span>📧 info@sollant.com</span>
                            </div>
                        </div>

                        <div className={styles.locationCard}>
                            <div className={styles.locationBadge}>EUROPE OFFICE</div>
                            <h4>Madrid, Spain</h4>
                            <p>
                                Calle de la Industria 45,<br />
                                28045 Madrid,<br />
                                Spain
                            </p>
                            <div className={styles.locationContact}>
                                <span>📞 +34 91 123 4567</span>
                                <span>📧 europe@sollant.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
