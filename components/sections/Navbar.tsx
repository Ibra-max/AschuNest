'use client';

/* Navigationsleiste mit Logo, Links, CTA und Sprachumschalter */

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import NestLogo from '@/components/ui/NestLogo';

export default function Navbar() {
    const t = useTranslations('nav');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    /* Sprache wechseln */
    const wechsleSprache = () => {
        const neueSprache = locale === 'de' ? 'ar' : 'de';
        const pfadOhneSprache = pathname.replace(/^\/(de|ar)/, '');
        router.push(`/${neueSprache}${pfadOhneSprache || '/'}`);
    };

    return (
        <nav className="nav">
            <a href={`/${locale}`} className="nav__logo">
                <div className="nav__logo-mark">
                    <NestLogo width={36} height={36} />
                </div>
                <span className="nav__logo-text">
                    Aschu<span>nest</span>
                </span>
            </a>

            <ul className="nav__links">
                <li><a href="#leistungen">{t('services')}</a></li>
                <li><a href="#projekte">{t('projects')}</a></li>
                <li><a href="#ueber-uns">{t('about')}</a></li>
                <li><a href="#kontakt" className="nav__cta">{t('cta')}</a></li>
                <li>
                    <button
                        type="button"
                        className="nav__lang-btn"
                        onClick={wechsleSprache}
                        aria-label={locale === 'de' ? 'Zu Arabisch wechseln' : 'إلى الألمانية'}
                    >
                        {locale === 'de' ? 'عربي' : 'DE'}
                    </button>
                </li>
            </ul>

            {/* Mobiler Toggle */}
            <button type="button" className="nav__mobile-toggle" aria-label="Menü öffnen">
                <span />
                <span />
                <span />
            </button>
        </nav>
    );
}
