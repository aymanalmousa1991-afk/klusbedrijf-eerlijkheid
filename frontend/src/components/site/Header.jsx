import { useEffect, useState } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import Logo from "@/components/site/Logo";
import Wordmark from "@/components/site/Wordmark";
import { useTranslation } from "@/i18n/LanguageContext";

const links = [
    { href: "#diensten", labelKey: "nav.diensten" },
    { href: "#waarom", labelKey: "nav.waarom" },
    { href: "#aanvragen", labelKey: "nav.aanvragen" },
    { href: "#faq", labelKey: "nav.faq" },
    { href: "#contact", labelKey: "nav.contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t, language, toggleLanguage } = useTranslation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="site-header"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled || open
                    ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-soft"
                    : "bg-white"
            }`}
        >
                        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex items-center justify-between h-20 md:h-24">
                                <a
                    href="#top"
                    data-testid="logo-link"
                    className="flex items-center gap-2 sm:gap-3 shrink-0 z-50"
                >
                    <Logo size={32} className="md:size-[38px]" />
                    <Wordmark size="sm" />
                </a>

                                <nav className="hidden lg:flex items-center gap-1" aria-label="Hoofdnavigatie">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={`nav-${l.labelKey.replace("nav.", "")}`}
                            className="text-sm font-semibold text-[#2C3E50]/80 hover:text-[#C9960C] transition-colors px-3 py-2 rounded-md hover:bg-[#C9960C]/5 border-b-2 border-transparent hover:border-[#C9960C]"
                        >
                            {t(l.labelKey)}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-2">
                    {/* Taal toggle */}
                    <button
                        onClick={toggleLanguage}
                        aria-label={language === "nl" ? "Switch to English" : "Schakel naar Nederlands"}
                        className="flex items-center gap-1 text-xs font-semibold text-[#2C3E50]/60 hover:text-[#C9960C] transition-colors px-2 py-1.5 rounded-md hover:bg-[#C9960C]/5 border border-transparent hover:border-[#C9960C]/20"
                    >
                        <Globe size={14} />
                        <span className="uppercase tracking-wider">{language === "nl" ? "NL" : "EN"}</span>
                        <span className="text-[10px] text-[#2C3E50]/30">/</span>
                        <span className={`uppercase tracking-wider ${language === "en" ? "text-[#C9960C]" : "text-[#2C3E50]/40"}`}>
                            {language === "nl" ? "EN" : "NL"}
                        </span>
                    </button>
                    <a
                        href="tel:0643690981"
                        className="flex items-center gap-1.5 text-sm font-bold text-[#2C3E50] hover:text-[#C9960C] transition-colors whitespace-nowrap"
                        aria-label="Bel 06 4369 0981"
                    >
                        <Phone size={13} className="text-[#C9960C]" />
                        <span className="tracking-tight">06 4369 0981</span>
                    </a>
                    <a
                        href="#aanvragen"
                        data-testid="header-cta"
                        className="bg-[#B22222] hover:bg-[#8B0000] text-white font-bold text-xs px-4 py-2.5 rounded-md shadow-soft transition-colors whitespace-nowrap inline-flex items-center justify-center min-h-[44px]"
                    >
                        {t("nav.offerte")}
                    </a>
                </div>

                <button
                    data-testid="mobile-menu-toggle"
                    aria-label={open ? "Sluit menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="lg:hidden p-2 text-[#2C3E50] z-50"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu with smooth animation */}
            <div
                className={`lg:hidden border-t border-gray-100 bg-white overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
                aria-hidden={!open}
            >
                                <div className="px-6 py-5 flex flex-col gap-1">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            data-testid={`mobile-nav-${l.labelKey.replace("nav.", "")}`}
                            className="py-3 text-base font-semibold text-[#2C3E50] hover:text-[#C9960C] border-b border-gray-100 last:border-0 transition-colors"
                        >
                            {t(l.labelKey)}
                        </a>
                    ))}
                    {/* Taal toggle mobiel */}
                    <button
                        onClick={() => { toggleLanguage(); setOpen(false); }}
                        className="py-3 text-base font-semibold text-[#2C3E50] hover:text-[#C9960C] border-b border-gray-100 transition-colors flex items-center gap-2"
                    >
                        <Globe size={16} className="text-[#C9960C]" />
                        <span>{language === "nl" ? "English" : "Nederlands"}</span>
                    </button>
                    <a
                        href="tel:0643690981"
                        className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-[#2C3E50] py-2"
                        aria-label="Bel 06 4369 0981"
                    >
                        <Phone size={14} className="text-[#C9960C]" /> 06 4369 0981
                    </a>
                    <a
                        href="#aanvragen"
                        onClick={() => setOpen(false)}
                        data-testid="mobile-header-cta"
                        className="mt-1 bg-[#B22222] text-white font-bold text-sm px-5 py-3.5 text-center rounded-md min-h-[44px] flex items-center justify-center"
                    >
                        {t("nav.offerte")}
                    </a>
                </div>
            </div>
        </header>
    );
}
