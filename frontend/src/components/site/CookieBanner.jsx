import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export default function CookieBanner() {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);

        useEffect(() => {
        try {
            const v = localStorage.getItem("ke_cookies");
            if (!v) setTimeout(() => setShow(true), 800);
        } catch (_) {
            // ignore
        }
    }, []);

    const accept = () => {
        try { localStorage.setItem("ke_cookies", "accepted"); } catch (_) {/* ignore */}
        setShow(false);
    };
    const decline = () => {
        try { localStorage.setItem("ke_cookies", "declined"); } catch (_) {/* ignore */}
        setShow(false);
    };

    if (!show) return null;

    return (
        <div data-testid="cookie-banner" className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6 md:max-w-md z-40">
                        <div className="bg-[#2C3E50] text-white rounded-2xl shadow-elevated p-5 md:p-6 border border-white/10 relative">
                <button
                    onClick={decline}
                    aria-label="Sluiten"
                    className="absolute top-3 right-3 text-white/50 hover:text-white"
                >
                    <X size={18} />
                </button>
                <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#B8860B]/20 text-[#B8860B] flex items-center justify-center shrink-0">
                        <Cookie size={20} />
                    </div>
                    <div>
                        <div className="font-display text-lg uppercase tracking-tight">{t("cookie.title")}</div>
                            <p className="text-sm text-white/70 leading-relaxed mt-1">
                                {t("cookie.text")}
                            </p>
                    </div>
                </div>
                <div className="flex gap-2 mt-4">
                    <button
                        onClick={accept}
                        data-testid="cookie-accept"
                        className="flex-1 bg-[#B8860B] hover:bg-[#9A7209] text-white font-semibold text-sm py-2.5 rounded-lg transition-colors"
                    >
                                                {t("cookie.accept")}
                    </button>
                    <button
                        onClick={decline}
                        data-testid="cookie-decline"
                        className="px-4 py-2.5 border border-white/20 hover:bg-white/10 text-sm rounded-lg transition-colors"
                    >
                        {t("cookie.decline")}
                    </button>
                </div>
            </div>
        </div>
    );
}
