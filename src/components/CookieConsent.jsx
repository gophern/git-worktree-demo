import { useEffect, useState } from 'react';

const STORAGE_KEY = 'salespilot-cookie-consent';

function CookieConsent() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        try {
            setOpen(!localStorage.getItem(STORAGE_KEY));
        } catch {
            setOpen(true);
        }
    }, []);

    const persist = (value) => {
        try {
            localStorage.setItem(STORAGE_KEY, value);
        } catch {
            /* ignore */
        }
        setOpen(false);
    };

    if (!open) return null;

    return (
        <div
            className="cookie-consent"
            role="dialog"
            aria-modal="false"
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-desc"
        >
            <div className="cookie-consent__inner container">
                <div className="cookie-consent__text">
                    <h2 id="cookie-consent-title" className="cookie-consent__title">
                        Cookie 与隐私
                    </h2>
                    <p id="cookie-consent-desc" className="cookie-consent__desc">
                        我们使用必要 Cookie 维持站点运行；在你同意的情况下，也可使用分析类 Cookie
                        以改进体验。详见隐私说明（演示文案）。
                    </p>
                </div>
                <div className="cookie-consent__actions">
                    <button
                        type="button"
                        className="btn btn--outline btn--sm cookie-consent__btn"
                        onClick={() => persist('essential')}
                    >
                        仅必要
                    </button>
                    <button
                        type="button"
                        className="btn btn--primary btn--sm cookie-consent__btn"
                        onClick={() => persist('all')}
                    >
                        全部接受
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;
