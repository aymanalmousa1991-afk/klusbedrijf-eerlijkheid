import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/site/Logo";
import Wordmark from "@/components/site/Wordmark";

const links = [
    { href: "#diensten", label: "Diensten" },
    { href: "#waarom", label: "Waarom wij" },
    { href: "#aanvragen", label: "Aanvragen" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
                    className="flex items-center gap-3 shrink-0"
                >
                    <Logo size={38} className="md:size-[42px]" />
                    <Wordmark size="md" />
                </a>

                                <nav className="hidden lg:flex items-center gap-1">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={`nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                            className="text-sm font-semibold text-[#2C3E50]/80 hover:text-[#C9960C] transition-colors px-3 py-2 rounded-md hover:bg-[#C9960C]/5 border-b-2 border-transparent hover:border-[#C9960C]"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-2">
                    <a
                        href="tel:0643690981"
                        className="flex items-center gap-1.5 text-sm font-bold text-[#2C3E50] hover:text-[#C9960C] transition-colors whitespace-nowrap"
                    >
                        <Phone size={13} className="text-[#C9960C]" />
                        <span className="tracking-tight">06 4369 0981</span>
                    </a>
                    <a
                        href="#aanvragen"
                        data-testid="header-cta"
                        className="bg-[#B22222] hover:bg-[#8B0000] text-white font-bold text-xs px-4 py-2.5 rounded-md shadow-soft transition-colors whitespace-nowrap"
                    >
                        Offerte aanvragen
                    </a>
                </div>

                <button
                    data-testid="mobile-menu-toggle"
                    aria-label="Menu"
                    onClick={() => setOpen((v) => !v)}
                    className="lg:hidden p-2 text-[#2C3E50]"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {open && (
                <div className="lg:hidden border-t border-gray-100 bg-white">
                    <div className="px-6 py-5 flex flex-col gap-1">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                                className="py-3 text-base font-semibold text-[#2C3E50] hover:text-[#B8860B] border-b border-gray-100 last:border-0"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                                href="tel:0681932710"
                                className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-[#2C3E50] py-2"
                            >
                                <Phone size={14} className="text-[#C9960C]" /> 06 4369 0981
                            </a>
                            <a
                                href="#aanvragen"
                                onClick={() => setOpen(false)}
                                data-testid="mobile-header-cta"
                                className="mt-1 bg-[#B22222] text-white font-bold text-sm px-5 py-3.5 text-center rounded-md"
                            >
                                Offerte aanvragen
                            </a>
                    </div>
                </div>
            )}
        </header>
    );
}
