export default function Wordmark({ className = "", inverse = false, size = "md" }) {
    const sizes = {
        sm: { name: "text-sm md:text-base", sub: "text-[8px] md:text-[9px]" },
        md: { name: "text-base md:text-lg", sub: "text-[9px] md:text-[10px]" },
        lg: { name: "text-lg md:text-xl", sub: "text-[10px] md:text-[11px]" },
        xl: { name: "text-xl md:text-2xl", sub: "text-[10px] md:text-xs" },
    };
    const s = sizes[size] || sizes.md;
    const fg = inverse ? "text-white" : "text-[#2C3E50]";
    const muted = inverse ? "text-white/55" : "text-[#2C3E50]/55";
    return (
        <div className={`inline-flex flex-col leading-none ${className}`}>
            <div className={`font-display tracking-[0.04em] ${s.name} ${fg} flex items-baseline gap-1.5 font-bold`}>
                <span className="tracking-[0.06em]">KLUSBEDRIJF</span>
                <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#C9960C] mb-0.5" />
                <span className="tracking-[0.06em]">EERLIJKHEID</span>
            </div>
        </div>
    );
}
