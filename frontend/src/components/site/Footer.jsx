import { Facebook, Phone, Mail, Music } from "lucide-react";
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
                            <a
                                href="https://www.tiktok.com/@klusbedrijf.eerlijkheid?is_from_webapp=1&sender_device=pc"
                                aria-label="TikTok"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C9960C] flex items-center justify-center transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61566851036482&rdid=oALP0kbvf8XLKCZt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EBMkzrxMY%2F#"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C9960C] flex items-center justify-center transition-colors"
                            >
                                <Facebook size={14} />
                            </a>
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
