'use client';

import { useState } from 'react';
import styles from './distributor.module.css';
import Button from '@/components/ui/Button';
import { countries } from '@/lib/data';

export default function DistributorPage() {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        country: '',
        website: '',
        currentBusiness: '',
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

    const benefits = [
        { icon: '💰', title: 'Competitive Pricing', description: 'Factory-direct pricing with attractive margins' },
        { icon: '🚚', title: 'Fast Delivery', description: 'Quick turnaround from order to delivery' },
        { icon: '🛠️', title: 'Technical Support', description: '24/7 technical assistance for you and your customers' },
        { icon: '📈', title: 'Marketing Support', description: 'Marketing materials and sales training' },
        { icon: '🔒', title: 'Exclusive Territory', description: 'Protected territory for your region' },
        { icon: '🤝', title: 'Long-term Partnership', description: 'Grow together with mutual success' },
    ];

    return (
        <div className={styles.distributorPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Partnership Opportunity</span>
                        <h1>Become a Sollant Distributor</h1>
                        <p>
                            Join our global network of successful distributors and grow your
                            business with premium air compressor products.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className={`section ${styles.benefits}`}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header__title">Why Partner with Sollant?</h2>
                        <p className="section-header__subtitle">
                            Enjoy exclusive benefits as an authorized Sollant distributor
                        </p>
                    </div>

                    <div className={styles.benefitsGrid}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <span className={styles.benefitIcon}>{benefit.icon}</span>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className={`section ${styles.application}`}>
                <div className="container">
                    <div className={styles.applicationGrid}>
                        <div className={styles.applicationInfo}>
                            <h2>Apply to Become a Distributor</h2>
                            <p>
                                We're looking for ambitious partners to expand our global reach.
                                If you have experience in industrial equipment sales and want to
                                offer premium air compressors to your customers, we'd love to hear from you.
                            </p>

                            <div className={styles.requirements}>
                                <h3>Ideal Partner Profile:</h3>
                                <ul>
                                    <li>Experience in industrial equipment sales</li>
                                    <li>Established customer network</li>
                                    <li>Technical knowledge or support capability</li>
                                    <li>Strong local market presence</li>
                                    <li>Commitment to customer service excellence</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.formWrapper}>
                            {isSubmitted ? (
                                <div className={styles.successMessage}>
                                    <span className={styles.successIcon}>✓</span>
                                    <h3>Application Submitted!</h3>
                                    <p>Thank you for your interest. Our partnership team will contact you within 48 hours.</p>
                                    <Button onClick={() => setIsSubmitted(false)}>Submit Another</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formGroup}>
                                        <label>Company Name *</label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Contact Person *</label>
                                            <input
                                                type="text"
                                                name="contactPerson"
                                                value={formData.contactPerson}
                                                onChange={handleChange}
                                                required
                                                className={styles.input}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className={styles.input}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Phone *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className={styles.input}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Country *</label>
                                            <select
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                required
                                                className={styles.select}
                                            >
                                                <option value="">Select country</option>
                                                {countries.map((country) => (
                                                    <option key={country} value={country}>{country}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Company Website</label>
                                        <input
                                            type="url"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            placeholder="https://"
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Current Business Description *</label>
                                        <textarea
                                            name="currentBusiness"
                                            value={formData.currentBusiness}
                                            onChange={handleChange}
                                            required
                                            className={styles.textarea}
                                            rows={3}
                                            placeholder="Describe your current business and customer base..."
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Additional Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={styles.textarea}
                                            rows={3}
                                            placeholder="Any additional information or questions..."
                                        />
                                    </div>

                                    <Button type="submit" fullWidth size="lg">
                                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
