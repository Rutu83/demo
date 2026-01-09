'use client';

import { useState } from 'react';
import styles from './Hero.module.css';
import Button from '../ui/Button';
import { productCategories } from '@/lib/data';

export default function Hero() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.overlay}></div>
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.textContent}>
                    <span className={styles.badge}>Professional Air Compressor Manufacturer</span>
                    <h1 className={styles.title}>
                        Durable & Reliable<br />
                        <span className={styles.highlight}>Air Compressor</span> Manufacturer
                    </h1>
                    <p className={styles.subtitle}>
                        With 20+ years of expertise, Sollant delivers premium quality air compressors
                        to industrial clients worldwide. Energy-efficient, reliable, and built to last.
                    </p>
                    <div className={styles.ctas}>
                        <Button href="/contact" size="lg">Contact Us For a Quote</Button>
                        <Button href="/products" variant="outline" size="lg">View Products</Button>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>20+</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>50+</span>
                            <span className={styles.statLabel}>Countries Served</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>10K+</span>
                            <span className={styles.statLabel}>Happy Clients</span>
                        </div>
                    </div>
                </div>

                <div className={styles.productTabs}>
                    <div className={styles.tabsHeader}>
                        {productCategories.map((cat, index) => (
                            <button
                                key={cat.id}
                                className={`${styles.tab} ${activeTab === index ? styles.tabActive : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <span className={styles.tabIcon}>{cat.icon}</span>
                                <span className={styles.tabName}>{cat.name}</span>
                            </button>
                        ))}
                    </div>
                    <div className={styles.tabContent}>
                        <div className={styles.productPreview}>
                            <div className={styles.productImage}>
                                <div className={styles.imagePlaceholder}>
                                    <span>🔧</span>
                                </div>
                            </div>
                            <div className={styles.productInfo}>
                                <h3>{productCategories[activeTab].name}</h3>
                                <p>High-quality {productCategories[activeTab].name.toLowerCase()} compressors for industrial applications.</p>
                                <Button href={`/products?category=${productCategories[activeTab].id}`} size="sm">
                                    Explore →
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span>Scroll Down</span>
                <div className={styles.scrollArrow}></div>
            </div>
        </section>
    );
}
