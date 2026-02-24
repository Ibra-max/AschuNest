/* Werte-Sektion — Server-Komponente */

import { useTranslations } from 'next-intl';

export default function Values() {
    const t = useTranslations('values');

    const werte = [
        { icon: '🤝', key: 0 },
        { icon: '✦', key: 1 },
        { icon: '🌍', key: 2 },
        { icon: '⚡', key: 3 },
    ];

    return (
        <section className="section" id="ueber-uns">
            <div className="section__tag">{t('tag')}</div>
            <h2 className="section__headline">
                {t('headline1')}<br />
                <em>{t('headline2')}</em>
            </h2>
            <div className="values-grid">
                {werte.map((wert) => (
                    <div key={wert.key} className="value-card">
                        <div className="value-card__icon">{wert.icon}</div>
                        <div className="value-card__title">{t(`items.${wert.key}.title`)}</div>
                        <p className="value-card__text">{t(`items.${wert.key}.text`)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
