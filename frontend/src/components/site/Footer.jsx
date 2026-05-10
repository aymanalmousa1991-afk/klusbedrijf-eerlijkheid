import { Linkedin, Instagram, Facebook, Phone, Mail } from "lucide-react";
import Logo from "@/components/site/Logo";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer data-testid="site-footer" className="bg-[#2C3E50] text-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-20">
                {/* Responsive grid: stack op mobiel, 3 kolommen op md+ */}
                <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-10">
                    {/* Column 1: Logo + Description + Socials */}
                    <div>
                        <a href="#top" className="inline-flex items-center gap-2 mb-4">
                            <Logo size={28} />
                            <span className="text-sm md:text-base font-bold tracking-[0.04em] text-white">{t("footer.bedrijfsnaam")}</span>
                        </a>
                        <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-xs">
                            {t("footer.desc")}
                        </p>
                        <div className="flex items-center gap-2">
                            {[{ Icon: Linkedin, label: 'LinkedIn' }, { Icon: Instagram, label: 'Instagram' }, { Icon: Facebook, label: 'Facebook' }].map(({ Icon, label }, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label={label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C9960C] flex items-center justify-center transition-colors"
                                >
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Navigatie */}
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#C9960C]/70 mb-4">{t("footer.navigatie")}</div>
                        <ul className="space-y-2.5 text-sm">
                            <li><a href="#diensten" className="text-white/70 hover:text-[#C9960C] transition-colors">{t("footer.diensten")}</a></li>
                            <li><a href="#waarom" className="text-white/70 hover:text-[#C9960C] transition-colors">{t("footer.waarom")}</a></li>
                            <li><a href="#aanvragen" className="text-white/70 hover:text-[#C9960C] transition-colors">{t("footer.offerte")}</a></li>
                            <li><a href="#faq" className="text-white/70 hover:text-[#C9960C] transition-colors">{t("footer.faq")}</a></li>
                            <li><a href="#reviews" className="text-white/70 hover:text-[#C9960C] transition-colors">{t("footer.reviews")}</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact — schoon en overzichtelijk */}
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#C9960C]/70 mb-4">{t("footer.contact")}</div>
                        <ul className="space-y-3">
                            <li>
                                <a href="tel:0643690981" className="inline-flex items-center gap-2.5 text-white/80 hover:text-[#C9960C] transition-colors text-sm">
                                    <Phone size={14} className="text-[#C9960C]" />
                                    <span>{t("footer.telefoon")}</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@klusbedrijf-eerlijkheid.nl" className="inline-flex items-center gap-2.5 text-white/80 hover:text-[#C9960C] transition-colors text-sm">
                                    <Mail size={14} className="text-[#C9960C]" />
                                    <span className="break-all">{t("footer.email")}</span>
                                </a>
                            </li>
                            <li className="inline-flex items-center gap-2.5 text-white/50 text-sm">
                                <span className="w-[14px]" />
                                <span>{t("footer.werkgebied")}</span>
                            </li>
                            <li className="inline-flex items-center gap-2.5 text-white/50 text-sm">
                                <span className="w-[14px]" />
                                <span>{t("footer.bereikbaar")}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-white/45">
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                        <span>© {new Date().getFullYear()} {t("footer.copyright")}</span>
                        <span>·</span>
                        <span>{t("footer.kvk")}</span>
                        <span>·</span>
                        <a href="#" className="hover:text-[#C9960C] transition-colors">{t("footer.privacy")}</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {t("footer.bereikbaar_label")}
                    </div>
                </div>
            </div>
        </footer>
    );
}
