import { useState, useEffect } from 'react';
import { NAV_LINKS, BRAND } from '../data/navigation';

const THEME_KEY = 'salespilot-theme';

function readThemeFromDom() {
    if (typeof document === 'undefined') return 'dark';
    const t = document.documentElement.getAttribute('data-theme');
    return t === 'light' || t === 'dark' ? t : 'dark';
}

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(readThemeFromDom);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch {
            /* ignore */
        }
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    return (
        <header className="navbar" role="banner">
            <div className="navbar__inner container">
                <a href="/" className="navbar__brand" aria-label={`${BRAND.name} 首页`}>
                    <span className="navbar__logo" aria-hidden="true">◆</span>
                    <span className="navbar__brand-name">{BRAND.name}</span>
                </a>

                <button
                    className="navbar__toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-controls="nav-menu"
                    aria-label="打开或关闭导航菜单"
                >
                    <span className="navbar__toggle-bar" />
                    <span className="navbar__toggle-bar" />
                    <span className="navbar__toggle-bar" />
                </button>

                <nav
                    id="nav-menu"
                    className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}
                    role="navigation"
                    aria-label="主导航"
                >
                    <ul className="navbar__list">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href} className="navbar__item">
                                <a href={link.href} className="navbar__link" onClick={() => setMenuOpen(false)}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="navbar__actions">
                        <button
                            type="button"
                            className="navbar__theme-toggle"
                            onClick={toggleTheme}
                            aria-label={theme === 'dark' ? '切换为浅色模式' : '切换为深色模式'}
                            title={theme === 'dark' ? '浅色模式' : '深色模式'}
                        >
                            {theme === 'dark' ? (
                                <span className="navbar__theme-icon" aria-hidden="true">☀️</span>
                            ) : (
                                <span className="navbar__theme-icon" aria-hidden="true">🌙</span>
                            )}
                        </button>
                        <a href="#demo" className="btn btn--primary btn--sm navbar__cta">
                            预约 Demo
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
