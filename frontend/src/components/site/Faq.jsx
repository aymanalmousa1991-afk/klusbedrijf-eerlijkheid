import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "@/i18n/LanguageContext";

const items = [
    { qKey: "faq.q1", aKey: "faq.a1" },
    { qKey: "faq.q2", aKey: "faq.a2" },
    { qKey: "faq.q3", aKey: "faq.a3" },
    { qKey: "faq.q4", aKey: "faq.a4" },
    { qKey: "faq.q5", aKey: "faq.a5" },
    { qKey: "faq.q6", aKey: "faq.a6" },
];

export default function Faq() {
    const { t } = useTranslation();
    return (
        <section id="faq" data-testid="faq-section" className="section-padding bg-white">
            <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-14 reveal">
                <div className="inline-flex items-center gap-2 bg-[#B8860B]/10 text-[#B8860B] px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase mb-4 md:mb-5">
                    {t("faq.badge")}
                </div>
                <h2 className="text-[#2C3E50]">
                    {t("faq.title")} <span className="text-[#B8860B]">{t("faq.title_highlight")}</span>.
                </h2>
                </div>
                <Accordion type="single" collapsible className="space-y-2 reveal">
                    {items.map((it, i) => (
                        <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            data-testid={`faq-item-${i}`}
                            className="bg-[#F8FAFC] border border-gray-200 rounded-xl px-5 md:px-6"
                        >
                            <AccordionTrigger className="text-left font-display text-lg md:text-xl text-[#2C3E50] hover:no-underline py-5">
                                {t(it.qKey)}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#2C3E50]/65 leading-relaxed pb-5 text-sm md:text-base">
                                {t(it.aKey)}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
