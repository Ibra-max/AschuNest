/* Routing-Konfiguration für next-intl */
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['de', 'ar'],
    defaultLocale: 'de',
});
