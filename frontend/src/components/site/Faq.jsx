import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
    { q: "Hoe snel kunnen jullie beginnen?", a: "Voor kleine klussen kunnen we vaak binnen enkele dagen starten. Bij grotere projecten plannen we ruim van tevoren, zodat we alles goed kunnen voorbereiden. Vraag vrijblijvend een offerte aan voor een passende planning." },
    { q: "Krijg ik een vaste prijs of per uur?", a: "Wij werken met vaste prijzen. U ontvangt vooraf een duidelijke offerte, zodat u precies weet waar u aan toe bent. Geen verrassingen achteraf, ook niet als de klus wat langer duurt." },
    { q: "Is Klusbedrijf Eerlijkheid verzekerd?", a: "Ja, wij zijn volledig verzekerd voor aansprakelijkheid en bedrijfsschade. U kunt met een gerust hart zaken met ons doen." },
    { q: "Wat kost een offerte?", a: "Een offerte is geheel vrijblijvend en kost niets. We komen langs voor een gesprek, bekijken de situatie en sturen u binnen 24 uur een heldere prijsopgave." },
    { q: "Doen jullie ook kleinere klussen?", a: "Zeker! Van een lekkage repareren tot een muurtje stucen — geen klus is te klein. Wij staan ook voor onderhoud en kleine reparaties graag voor u klaar." },
    { q: "Werken jullie door heel Nederland?", a: "Ja, wij zijn actief door heel Nederland. Reiskosten worden altijd transparant vermeld in de offerte, zodat u niet voor verrassingen komt te staan." },
];

export default function Faq() {
    return (
        <section id="faq" data-testid="faq-section" className="section-padding bg-white">
            <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-14 reveal">
                <div className="inline-flex items-center gap-2 bg-[#B8860B]/10 text-[#B8860B] px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase mb-4 md:mb-5">
                    FAQ
                </div>
                <h2 className="text-[#2C3E50]">
                    Veelgestelde <span className="text-[#B8860B]">vragen</span>.
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
                                {it.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#2C3E50]/65 leading-relaxed pb-5 text-sm md:text-base">
                                {it.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
