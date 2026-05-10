import { ShieldCheck, BadgeCheck, Award, Clock, HardHat } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const items = [
    { icon: ShieldCheck, labelKey: "trust.vakkundig" },
    { icon: BadgeCheck, labelKey: "trust.vaste_prijzen" },
    { icon: Award, labelKey: "trust.ervaren_team" },
    { icon: Clock, labelKey: "trust.snelle_start" },
    { icon: HardHat, labelKey: "trust.verzekerd" },
];

export default function TrustStrip() {
    const { t } = useTranslation();
    return (
        <section data-testid="trust-strip" className="border-y border-gray-200 bg-[#2C3E50] py-7">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
                <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-3">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                        {t("trust.label")}
                    </div>
                    {items.map((it, i) => {
                        const Icon = it.icon;
                        return (
                            <div key={i} data-testid={`trust-${i}`} className="flex items-center gap-2 text-white/85 hover:text-[#B8860B] transition-colors">
                                <Icon size={16} className="text-[#B8860B]" />
                                <span className="text-sm font-bold">{t(it.labelKey)}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
