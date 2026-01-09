import styles from './FAQ.module.css';
import Accordion from '../ui/Accordion';
import { faqs } from '@/lib/data';

export default function FAQ() {
    return (
        <section className={`section ${styles.faq}`}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-header__title">You May Have More Questions</h2>
                    <p className="section-header__subtitle">
                        We Are Here To Answer Them All! Find answers to common questions about
                        our products, services, and partnership opportunities.
                    </p>
                </div>

                <div className={styles.faqContent}>
                    <div className={styles.faqList}>
                        <Accordion items={faqs} />
                    </div>

                    <div className={styles.contactBox}>
                        <div className={styles.contactCard}>
                            <span className={styles.contactIcon}>💬</span>
                            <h3>Still Have Questions?</h3>
                            <p>Can't find the answer you're looking for? Please contact our friendly team.</p>
                            <a href="mailto:info@sollant.com" className={styles.contactEmail}>
                                info@sollant.com
                            </a>
                            <a href="tel:+86-15800679965" className={styles.contactPhone}>
                                +86-15800679965
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
