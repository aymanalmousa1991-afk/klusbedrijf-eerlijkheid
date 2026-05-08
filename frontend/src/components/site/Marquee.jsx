export default function Marquee() {
    const items = [
        "BABW-conform",
        "24/7 beschikbaar",
        "Heel Nederland",
        "Volledig verzekerd",
        "Korte responstijd",
        "Aangesteld door gemeente",
    ];
    const list = [...items, ...items];
    return (
        <section
            data-testid="marquee"
            className="border-y border-gray-200 bg-gray-50 py-5 overflow-hidden"
        >
            <div className="flex gap-10 whitespace-nowrap animate-marquee w-max">
                {list.map((t, i) => (
                    <div key={i} className="flex items-center gap-10 text-base font-medium text-gray-500">
                        <span>{t}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    </div>
                ))}
            </div>
        </section>
    );
}
