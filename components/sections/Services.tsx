/* Leistungen-Sektion — Server-Komponente */

import { useTranslations } from 'next-intl';

export default function Services() {
    const t = useTranslations('services');

    /* Leistungen aufgeteilt in linke und rechte Spalte */
    const linkeLeistungen = [0, 1, 2];
    const rechteLeistungen = [3, 4];

    return (
        <section className="services-section" id="leistungen">
            <div className="section__tag">{t('tag')}</div>
            <h2 className="section__headline">
                {t('headline1')}<br />
                <em>{t('headline2')}</em>
            </h2>
            <div className="services-layout">
                <div>
                    {linkeLeistungen.map((i) => (
                        <div key={i} className="service-item">
                            <div className="service-item__num">{t(`items.${i}.num`)}</div>
                            <div>
                                <div className="service-item__title">{t(`items.${i}.title`)}</div>
                                <p className="service-item__desc">{t(`items.${i}.desc`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    {rechteLeistungen.map((i) => (
                        <div key={i} className="service-item">
                            <div className="service-item__num">{t(`items.${i}.num`)}</div>
                            <div>
                                <div className="service-item__title">{t(`items.${i}.title`)}</div>
                                <p className="service-item__desc">{t(`items.${i}.desc`)}</p>
                                {t.has(`items.${i}.badge`) && (
                                    <span className="service-item__badge">{t(`items.${i}.badge`)}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
