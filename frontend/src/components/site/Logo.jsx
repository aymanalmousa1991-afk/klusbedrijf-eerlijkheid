export default function Logo({ className = "", size = 36 }) {
    return (
        <img 
            src="/assets/images/logo/klusbedrijf-eerlijkheid-wit.svg"
            alt="Klusbedrijf Eerlijkheid logo"
            width={size * 3.5}
            height={size}
            className={`h-auto ${className}`}
            style={{ width: size * 3.5, maxWidth: 'unset' }}
            loading="eager"
        />
    );
}
