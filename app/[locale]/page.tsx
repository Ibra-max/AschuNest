/* Hauptseite — Alle Sektionen zusammengeführt */

import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Values from '@/components/sections/Values';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Startseite() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Values />
                <Services />
                <Process />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
