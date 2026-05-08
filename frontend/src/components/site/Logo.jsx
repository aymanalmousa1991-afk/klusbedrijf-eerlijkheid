export default function Logo({ className = "", size = 36 }) {
    return (
        <img 
            src="/assets/images/logo/klusbedrijf-eerlijkheid-wit.svg"
            alt="Klusbedrijf Eerlijkheid logo"
            width={size * 3.5}
            height={size}
            className={`h-auto max-w-[160px] md:max-w-[200px] lg:max-w-[240px] ${className}`}
            style={{ width: Math.min(size * 3.5, 240) }}
            loading="eager"
        />
    );
}
