/* Prozess-Sektion — Server-Komponente */

import { useTranslations } from 'next-intl';

export default function Process() {
    const t = useTranslations('process');

    const schritte = [0, 1, 2, 3, 4];

    return (
        <section className="process-section">
            <div className="section__tag">{t('tag')}</div>
            <h2 className="section__headline">
                {t('headline1')}<br />
                <em>{t('headline2')}</em>
            </h2>
            <div className="process-steps">
                {schritte.map((i) => (
                    <div key={i} className="step">
                        <div className="step__circle">{i + 1}</div>
                        <div className="step__title">{t(`steps.${i}.title`)}</div>
                        <p className="step__desc">{t(`steps.${i}.desc`)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
