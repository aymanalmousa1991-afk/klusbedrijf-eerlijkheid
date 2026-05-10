// Visual gallery strip — projecten van Klusbedrijf Eerlijkheid
import { useTranslation } from "@/i18n/LanguageContext";

const images = [
    '/assets/images/projecten/project-1.jpeg',
    '/assets/images/projecten/project-2.jpeg',
    '/assets/images/projecten/project-3.jpeg',
    '/assets/images/projecten/project-4.jpeg',
    '/assets/images/projecten/project-5.jpeg',
    '/assets/images/projecten/project-6.jpeg',
    '/assets/images/projecten/project-7.jpeg',
    '/assets/images/projecten/project-8.jpeg',
];

export default function GalleryStrip() {
    const { t } = useTranslation();
    return (
        <section data-testid="gallery-strip" className="section-padding bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-8 md:mb-10 reveal">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <div className="font-mono text-xs tracking-[0.2em] uppercase text-[#B8860B] mb-2">
                            / {t("gallery.badge")}
                        </div>
                        <h2 className="text-[#2C3E50]">
                            {t("gallery.title1")} <br />
                            <span className="text-[#B8860B]">{t("gallery.title2")}</span>
                        </h2>
                    </div>
                    <p className="md:max-w-md text-[#2C3E50]/65 text-sm md:text-base leading-relaxed">
                        {t("gallery.subtitle")}
                    </p>
                </div>
            </div>

            {/* Mobiel: horizontaal scrollbare carousel */}
            <div className="md:hidden overflow-x-auto px-4 sm:px-6 lg:px-10 -mx-4 sm:-mx-6 lg:-mx-10">
                <div className="flex gap-3 w-max px-4 sm:px-0">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="shrink-0 w-[260px] aspect-[4/3] rounded-2xl overflow-hidden bg-[#2C3E50] relative snap-center"
                        >
                            <img
                                src={src}
                                alt=""
                                loading="lazy"
                                onError={(e) => { e.currentTarget.style.opacity = '0.2'; }}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/50 to-transparent" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop: marquee */}
            <div className="hidden md:block relative">
                <div className="flex gap-4 md:gap-5 whitespace-nowrap animate-marquee w-max">
                    {[...images, ...images].map((src, i) => (
                        <div
                            key={i}
                            className="shrink-0 w-[360px] aspect-[4/3] rounded-2xl overflow-hidden bg-[#2C3E50] relative"
                        >
                            <img
                                src={src}
                                alt=""
                                loading="lazy"
                                onError={(e) => { e.currentTarget.style.opacity = '0.2'; }}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/50 to-transparent" />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            </div>
        </section>
    );
}