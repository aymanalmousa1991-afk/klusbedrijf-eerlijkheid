import { Phone } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export default function FloatingCall() {
    const { t } = useTranslation();
    return (
        <a
            href="tel:0643690981"
            data-testid="floating-call"
            aria-label={t("floating_call_label")}
            className="md:hidden fixed bottom-5 right-5 z-40 w-14 h-14 bg-[#B8860B] hover:bg-[#9A7209] text-white rounded-full shadow-[0_8px_24px_-8px_rgba(184,134,11,0.45)] flex items-center justify-center transition-colors pulse-ring"
        >
            <Phone size={22} />
            <span className="sr-only">{t("floating_call_label")}</span>
        </a>
    );
}
