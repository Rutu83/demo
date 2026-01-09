'use client';

import { useState } from 'react';
import styles from './Testimonials.module.css';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className={`section ${styles.testimonials}`}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-header__title">What Clients Are Saying About Sollant</h2>
                    <p className="section-header__subtitle">
                        Hear from our satisfied customers around the world
                    </p>
                </div>

                <div className={styles.carousel}>
                    <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSlide} aria-label="Previous">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div className={styles.carouselTrack}>
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`${styles.testimonialCard} ${index === activeIndex ? styles.active : ''}`}
                                style={{
                                    transform: `translateX(${(index - activeIndex) * 100}%)`,
                                    opacity: index === activeIndex ? 1 : 0.3,
                                }}
                            >
                                <div className={styles.quoteIcon}>"</div>
                                <p className={styles.testimonialText}>{testimonial.text}</p>
                                <div className={styles.authorInfo}>
                                    <div className={styles.authorAvatar}>
                                        <span>{testimonial.author.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <h4 className={styles.authorName}>{testimonial.author}</h4>
                                        <p className={styles.authorRole}>{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSlide} aria-label="Next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
