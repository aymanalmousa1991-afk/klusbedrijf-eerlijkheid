import { Linkedin, Instagram, Facebook, Phone, Mail } from "lucide-react";
import Logo from "@/components/site/Logo";

export default function Footer() {
    return (
        <footer data-testid="site-footer" className="bg-[#2C3E50] text-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">
                {/* 3-column grid: Logo+Description | Navigation | Contact */}
                <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12">
                    {/* Column 1: Logo + Description + Socials */}
                    <div className="md:col-span-1">
                        <a href="#top" className="inline-flex items-center gap-2 mb-4">
                            <Logo size={32} />
                            <span className="text-base md:text-lg font-bold tracking-[0.04em] text-white">KLUSBEDRIJF <span className="text-[#C9960C] mx-0.5">·</span> EERLIJKHEID</span>
                        </a>
                        <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-xs">
                            Uw betrouwbare partner voor stukadoor, tegels, renovatie, verf en uitbouw — heel Nederland. Eerlijk advies, vaste prijzen, vakkundig werk.
                        </p>
                        <div className="flex items-center gap-2">
                            {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label="Social"
                                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C9960C] flex items-center justify-center transition-colors"
                                >
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Navigation (label hidden from screen) */}
                    <div className="md:col-span-1">
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#C9960C]/70 mb-4 sr-only">Navigatie</div>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#diensten" className="text-white/70 hover:text-[#C9960C] transition-colors">Diensten</a></li>
                            <li><a href="#waarom" className="text-white/70 hover:text-[#C9960C] transition-colors">Waarom wij</a></li>
                            <li><a href="#aanvragen" className="text-white/70 hover:text-[#C9960C] transition-colors">Offerte aanvragen</a></li>
                            <li><a href="#faq" className="text-white/70 hover:text-[#C9960C] transition-colors">FAQ</a></li>
                            <li><a href="#contact" className="text-white/70 hover:text-[#C9960C] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="md:col-span-1">
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#C9960C]/70 mb-4">Contact</div>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2.5">
                                <Phone size={13} className="text-[#C9960C] shrink-0" />
                                <a href="tel:0643690981" className="text-white/70 hover:text-[#C9960C] transition-colors">06 4369 0981</a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <Mail size={13} className="text-[#C9960C] mt-0.5 shrink-0" />
                                <a href="mailto:info@klusbedrijf-eerlijkheid.nl" className="text-white/70 hover:text-[#C9960C] transition-colors break-all text-[13px]">info@klusbedrijf-eerlijkheid.nl</a>
                            </li>
                            <li className="text-white/50 pl-[21px]">Heel Nederland</li>
                            <li className="text-white/50 pl-[21px]">Ma-Vr 08:00 - 17:00</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-white/45">
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                        <span>© {new Date().getFullYear()} Klusbedrijf Eerlijkheid</span>
                        <span>·</span>
                        <span>KvK 99765985</span>
                        <span>·</span>
                        <a href="#" className="hover:text-[#C9960C] transition-colors">Privacy</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Bereikbaar: Ma-Vr 08:00 - 17:00
                    </div>
                </div>
            </div>
        </footer>
    );
}
