import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const items = [
    { icon: Phone, label: "Telefoon", value: "06 8193 2710", href: "tel:0681932710" },
    { icon: Mail, label: "E-mail", value: "0912azza0jabr@gmail.com", href: "mailto:0912azza0jabr@gmail.com" },
    { icon: MapPin, label: "Regio", value: "Den Oever — heel Nederland", href: null },
    { icon: Clock, label: "Bereikbaar", value: "Ma — Zo · 24/7 spoed", href: null },
];

export default function Contact() {
    return (
        <section id="contact" data-testid="contact-section" className="relative py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="bg-[#1F2937] text-white rounded-3xl p-10 md:p-16 relative overflow-hidden">
                    {/* Decorative blur */}
                    <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#2563EB]/30 blur-3xl pointer-events-none" />

                    <div className="relative grid lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-6">
                            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-5">
                                Contact
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
                                Direct contact, <br />
                                <span className="text-[#60A5FA]">direct geregeld</span>.
                            </h2>
                            <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed max-w-md">
                                Bel of mail ons — we reageren snel. Voor spoed
                                zijn we 24/7 bereikbaar.
                            </p>
                            <a
                                href="tel:0681932710"
                                className="mt-8 inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-sm px-6 py-3.5 rounded-lg transition-colors"
                            >
                                Bel nu — 06 8193 2710
                                <ArrowUpRight size={16} />
                            </a>
                        </div>

                        <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
                            {items.map((it, i) => {
                                const Icon = it.icon;
                                const Wrapper = it.href ? "a" : "div";
                                const props = it.href ? { href: it.href } : {};
                                return (
                                    <Wrapper
                                        key={i}
                                        {...props}
                                        data-testid={`contact-item-${i}`}
                                        className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-colors"
                                    >
                                        <Icon size={20} className="text-[#60A5FA] mb-4" strokeWidth={2} />
                                        <div className="text-xs text-gray-400 mb-1.5">{it.label}</div>
                                        <div className="font-display text-base md:text-lg text-white group-hover:text-[#60A5FA] transition-colors break-words leading-tight">
                                            {it.value}
                                        </div>
                                    </Wrapper>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
