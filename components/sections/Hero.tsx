'use client';

/* Hero-Bereich mit Text, Buttons und Kartenkarussell */

import { useEffect, useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import HeroBgNests from './HeroBgNests';

/* Einzelne Kundenkarte */
function HeroCard({ cardKey, isActive }: { cardKey: string; isActive: boolean }) {
    const t = useTranslations(`cards.${cardKey}`);
    const isSoon = cardKey === 'card3';
    const modules = Object.keys(
        cardKey === 'card2'
            ? { website: '', strategy: '', languages: '' }
            : { website: '', reserve: '', order: '' }
    );

    /* Modul-Status bestimmen */
    const modulStatus = (key: string) => {
        if (cardKey === 'card1') return key === 'website' ? 'active' : 'planned';
        if (cardKey === 'card2') return 'active';
        return 'planned';
    };

    return (
        <div className={`hero__card ${isActive ? 'hero__card--active' : ''}`}>
            <div className="card__header">
                <div
                    className="card__avatar"
                    style={isSoon ? { background: 'var(--color-sand-dark)', color: 'var(--color-brown-mid)' } : {}}
                >
                    {isSoon ? '+' : cardKey === 'card1' ? 'YP' : 'GA'}
                </div>
                <div>
                    <div className="card__name">{t('name')}</div>
                    <div className="card__sub">{t('sub')}</div>
                </div>
                <div className={`card__status ${isSoon ? 'card__status--soon' : ''}`}>
                    {t('status')}
                </div>
            </div>
            <div className="card__modules">
                {modules.map((key) => (
                    <div key={key} className="module-row">
                        <span className="module-row__label">{t(`modules.${key}`)}</span>
                        <span className={`module-row__dot module-row__dot--${modulStatus(key)}`} />
                    </div>
                ))}
            </div>
            <div className="card__footer">{t('footer')}</div>
        </div>
    );
}

export default function Hero() {
    const t = useTranslations('hero');
    const [aktuelleKarte, setAktuelleKarte] = useState(0);
    const kartenKeys = ['card1', 'card2', 'card3'];

    /* Zu bestimmter Karte wechseln */
    const zuKarte = useCallback((index: number) => {
        setAktuelleKarte(index);
    }, []);

    /* Automatische Rotation */
    useEffect(() => {
        const interval = setInterval(() => {
            setAktuelleKarte((prev) => (prev + 1) % kartenKeys.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [kartenKeys.length]);

    return (
        <section className="hero">
            <HeroBgNests />

            <div className="hero__left">
                <div className="hero__tag">{t('tag')}</div>
                <h1 className="hero__headline">
                    {t('headline1')}<br />
                    {t('headline2')}<br />
                    <em>{t('headline3')}</em>
                </h1>
                <p className="hero__sub">{t('sub')}</p>
                <div className="hero__actions">
                    <a href="#kontakt" className="btn-primary">{t('ctaPrimary')}</a>
                    <a href="#projekte" className="btn-ghost">{t('ctaGhost')}</a>
                </div>
                <div className="hero__lang-strip">
                    <span className="hero__lang-pill">{t('langDe')}</span>
                    <span className="hero__lang-sep">·</span>
                    <span className="hero__lang-pill">{t('langAr')}</span>
                    <span className="hero__lang-sep">—</span>
                    <span className="hero__lang-text">{t('langSep')}</span>
                </div>
            </div>

            <div className="hero__right">
                <div className="hero__bg-shape" />

                <div className="hero__card-stack">
                    <div className="hero__badge hero__badge--top">{t('badgeNoTemplate')}</div>
                    <div className="hero__badge hero__badge--bottom">{t('badgePartnership')}</div>

                    {kartenKeys.map((key, i) => (
                        <HeroCard key={key} cardKey={key} isActive={i === aktuelleKarte} />
                    ))}

                    {/* Navigations-Punkte */}
                    <div className="card-dots">
                        {kartenKeys.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                className={`card-dots__dot ${i === aktuelleKarte ? 'card-dots__dot--active' : ''}`}
                                onClick={() => zuKarte(i)}
                                aria-label={`Karte ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
