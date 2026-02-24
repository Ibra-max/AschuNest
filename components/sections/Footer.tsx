/* Footer — Server-Komponente */

import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('footer');

    return (
        <footer className="footer">
            <div className="footer__logo">
                Aschu<span>nest</span>
            </div>
            <div>{t('copyright')}</div>
            <div className="footer__links">
                <a href="#">{t('imprint')}</a>
                <a href="#">{t('privacy')}</a>
            </div>
        </footer>
    );
}
