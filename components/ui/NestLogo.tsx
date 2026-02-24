/* Wiederverwendbare SVG-Logo-Komponente für Aschunest */

interface NestLogoProps {
    width?: number;
    height?: number;
    className?: string;
}

export default function NestLogo({ width = 44, height = 44, className }: NestLogoProps) {
    return (
        <svg
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            className={className}
        >
            {/* Äußerer Schutzbogen */}
            <path
                d="M6 28 C6 16 14 8 22 8 C30 8 38 16 38 28"
                stroke="#C4724A"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.25"
            />
            {/* Nestschale */}
            <path
                d="M8 28 C8 35 14 40 22 40 C30 40 36 35 36 28"
                stroke="#C4724A"
                strokeWidth="2"
                fill="rgba(196,114,74,0.1)"
                strokeLinecap="round"
            />
            {/* Flechtlinien */}
            <path
                d="M10 31 C14 29 18 30 22 30 C26 30 30 29 34 31"
                stroke="#C4724A"
                strokeWidth="1.3"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
            />
            <path
                d="M9 35 C13 33 18 34 22 34 C26 34 31 33 35 35"
                stroke="#C4724A"
                strokeWidth="1.3"
                fill="none"
                strokeLinecap="round"
                opacity="0.25"
            />
            {/* Zwei Eier */}
            <ellipse cx="18.5" cy="27" rx="2.8" ry="2.2" fill="#C4724A" opacity="0.35" />
            <ellipse cx="25.5" cy="27" rx="2.8" ry="2.2" fill="#C4724A" opacity="0.75" />
        </svg>
    );
}
