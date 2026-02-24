'use client';

/* Parallax-Hintergrundnester im Hero-Bereich */

import { useEffect, useRef } from 'react';

/* Einzelnes Nest-SVG als Hintergrunddekoration */
function NestSvg({ size, opacity, color = '#C4724A', filled = false }: {
    size: number;
    opacity: number;
    color?: string;
    filled?: boolean;
}) {
    return (
        <svg width={size} height={size} viewBox="0 0 44 44" fill="none" opacity={opacity}>
            <path
                d="M6 28 C6 16 14 8 22 8 C30 8 38 16 38 28"
                stroke={color}
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d="M8 28 C8 35 14 40 22 40 C30 40 36 35 36 28"
                stroke={color}
                strokeWidth="2"
                fill={filled ? `rgba(196,114,74,0.15)` : 'none'}
                strokeLinecap="round"
            />
            <path
                d="M10 31 C14 29 18 30 22 30 C26 30 30 29 34 31"
                stroke={color}
                strokeWidth="1.3"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d="M9 35 C13 33 18 34 22 34 C26 34 31 33 35 35"
                stroke={color}
                strokeWidth="1.3"
                fill="none"
                strokeLinecap="round"
            />
            <ellipse cx="18.5" cy="27" rx="2.8" ry="2.2" fill={color} />
            <ellipse cx="25.5" cy="27" rx="2.8" ry="2.2" fill={color} />
        </svg>
    );
}

/* Konfiguration der einzelnen Hintergrundnester */
const nesterDaten = [
    { size: 180, opacity: 0.055, speed: 0.018, color: '#C4724A', filled: true },
    { size: 110, opacity: 0.07, speed: 0.03, color: '#3D2B1F', rotate: 15 },
    { size: 80, opacity: 0.09, speed: 0.022, color: '#C4724A' },
    { size: 220, opacity: 0.04, speed: 0.012, color: '#C4724A', rotate: -8, filled: true },
    { size: 60, opacity: 0.1, speed: 0.04, color: '#C4724A', filled: true },
    { size: 140, opacity: 0.05, speed: 0.025, color: '#3D2B1F', rotate: 25 },
];

export default function HeroBgNests() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef(nesterDaten.map(() => ({ x: 0, y: 0 })));

    useEffect(() => {
        /* Mausbewegung verfolgen */
        const mausBewegung = (e: MouseEvent) => {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            mouseRef.current = { x: e.clientX - cx, y: e.clientY - cy };
        };

        window.addEventListener('mousemove', mausBewegung);

        /* Animations-Loop */
        let animId: number;
        const animieren = () => {
            const container = containerRef.current;
            if (!container) return;

            const nester = container.querySelectorAll<HTMLDivElement>('.bg-nest');
            nester.forEach((nest, i) => {
                const daten = nesterDaten[i];
                if (!daten) return;

                const zielX = mouseRef.current.x * daten.speed;
                const zielY = mouseRef.current.y * daten.speed;
                const cur = currentRef.current[i];

                cur.x += (zielX - cur.x) * 0.05;
                cur.y += (zielY - cur.y) * 0.05;

                const basisRotation = daten.rotate || 0;
                nest.style.transform = `rotate(${basisRotation}deg) translate(${cur.x}px, ${cur.y}px)`;
            });

            animId = requestAnimationFrame(animieren);
        };

        animId = requestAnimationFrame(animieren);

        return () => {
            window.removeEventListener('mousemove', mausBewegung);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <div className="hero__bg-nests" ref={containerRef}>
            {nesterDaten.map((daten, i) => (
                <div key={i} className="bg-nest" data-speed={daten.speed}>
                    <NestSvg
                        size={daten.size}
                        opacity={daten.opacity}
                        color={daten.color}
                        filled={daten.filled}
                    />
                </div>
            ))}
        </div>
    );
}
