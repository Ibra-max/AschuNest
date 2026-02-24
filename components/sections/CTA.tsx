/* Call-to-Action Sektion — Server-Komponente */

import { useTranslations } from 'next-intl';

export default function CTA() {
    const t = useTranslations('cta');

    return (
        <section className="cta-section" id="kontakt">
            <div className="section__tag">{t('tag')}</div>
            <h2 className="cta-section__headline">
                {t('headline1')}<br />
                {t('headline2')} <em>{t('headline3')}</em>
            </h2>
            <p className="cta-section__sub">{t('sub')}</p>
            <div className="cta-section__actions">
                <a href="#" className="btn-primary">{t('ctaPrimary')}</a>
                <a href="#" className="btn-ghost">{t('ctaGhost')}</a>
            </div>
        </section>
    );
}
