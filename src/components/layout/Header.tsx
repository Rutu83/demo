'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Button from '../ui/Button';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Videos', href: '/videos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <div className={`container ${styles.topBarContent}`}>
                    <div className={styles.topBarLeft}>
                        <span>📧 info@sollant.com</span>
                        <span>📞 +86-15800679965</span>
                    </div>
                    <div className={styles.topBarRight}>
                        <span>Professional Air Compressor Manufacturer Since 2004</span>
                    </div>
                </div>
            </div>

            <nav className={styles.nav}>
                <div className={`container ${styles.navContent}`}>
                    <Link href="/" className={styles.logo}>
                        <img 
                            src="/logo.jpeg" 
                            alt="INDUSAIR - Air Compressor" 
                            className={styles.logoImage}
                        />
                    </Link>

                    <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className={styles.navCta}>
                            <Button href="/contact" size="sm">Get Quote</Button>
                        </li>
                    </ul>

                    <button
                        className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </header>
    );
}
