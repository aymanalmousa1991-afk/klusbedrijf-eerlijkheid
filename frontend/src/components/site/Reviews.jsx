import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from "@/i18n/LanguageContext";

const defaultReviews = [
    {
        name: 'Familie Jansen',
        roleKey: 'reviews.rol_klant',
        text: 'Onze badkamer is volledig gerenoveerd door Klusbedrijf Eerlijkheid. Van tegelwerk tot stucwerk — alles is perfect uitgevoerd. Precies zoals afgesproken en binnen de afgesproken tijd.',
        text_en: 'Our bathroom was completely renovated by the company. From tiling to plastering — everything was done perfectly. Exactly as agreed and within the agreed timeframe.',
        rating: 5,
    },
    {
        name: 'Bouwbedrijf Van Vliet',
        roleKey: 'reviews.rol_partner',
        text: 'Wij werken regelmatig samen met Klusbedrijf Eerlijkheid voor onze uitbouwen. Betrouwbaar, vakkundig en altijd netjes opgeleverd. Een fijne samenwerking.',
        text_en: 'We regularly work together for our extensions. Reliable, skilled, and always delivered neatly. A great collaboration.',
        rating: 5,
    },
    {
        name: 'Mevrouw De Wit',
        roleKey: 'reviews.rol_klant',
        text: 'Mijn woonkamer is gestuct door Klusbedrijf Eerlijkheid. Wat een prachtig resultaat! Eerlijk advies gekregen en de prijs was zoals afgesproken. Zeker aan te bevelen.',
        text_en: 'My living room was plastered by them. What a beautiful result! Got honest advice and the price was as agreed. Highly recommended.',
        rating: 5,
    },
];

const API_URL = process.env.REACT_APP_BACKEND_URL;

export default function Reviews() {
    const { t, language } = useTranslation();
    const [reviews, setReviews] = useState(defaultReviews);
    const [formName, setFormName] = useState('');
    const [formText, setFormText] = useState('');
    const [formRating, setFormRating] = useState(5);
    const [showAll, setShowAll] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        fetch(API_URL + '/api/reviews')
            .then(r => r.json())
            .then(data => {
                if (data && data.length > 0) {
                    const mapped = data.map(r => ({
                        name: r.name,
                        roleKey: 'reviews.rol_klant',
                        text: r.text,
                        text_en: r.text,
                        rating: r.rating,
                    }));
                    setReviews([...defaultReviews, ...mapped]);
                }
            })
            .catch(() => {});
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formName || !formText) return;
        try {
            await fetch(API_URL + '/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: formName, text: formText, rating: formRating }),
            });
            setSubmitted(true);
            setFormName('');
            setFormText('');
            setFormRating(5);
            setTimeout(() => setSubmitted(false), 3000);
        } catch (err) {
            alert(t("reviews.form_thanks"));
        }
    };

    return (
        <section id="reviews" data-testid="reviews-section" className="section-padding bg-[#FAF8F4] overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
                <div className="text-center mb-14 reveal">
                    <div className="font-mono text-xs tracking-[0.2em] uppercase text-[#B8860B] mb-3">
                        / {t("reviews.badge")}
                    </div>
                    <h2 className="text-[#2C3E50]">
                        {t("reviews.title")} <span className="text-[#B8860B]">{t("reviews.title_highlight")}</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 reveal">
                    {(showAll ? reviews : reviews.slice(0, 6)).map((review, i) => (
                        <div key={i} className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col hover:border-[#B8860B]/30 hover:shadow-lg transition-all duration-300">
                            <Quote size={24} className="text-[#B8860B]/20 mb-4" />
                            <p className="text-sm md:text-base text-[#2C3E50]/80 leading-relaxed mb-6 flex-1">
                                &ldquo;{language === "en" && review.text_en ? review.text_en : review.text}&rdquo;
                            </p>
                            <div className="border-t border-gray-200 pt-4 mt-auto">
                                <div className="flex gap-0.5">
                                    {Array.from({ length: 5 }).map((_, j) => (
                                        <Star key={j} size={14} className={j < review.rating ? 'text-[#FFD700] fill-[#FFD700]' : 'text-gray-300'} />
                                    ))}
                                </div>
                                <div className="mt-2">
                                    <div className="font-bold text-sm text-[#2C3E50]">{review.name}</div>
                                    <div className="text-xs text-[#2C3E50]/50">{review.roleKey ? t(review.roleKey) : review.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {reviews.length > 6 && (
                    <div className="text-center mt-8 reveal">
                        <button onClick={() => setShowAll(!showAll)} className="text-[#B8860B] hover:text-[#9A7209] font-bold text-sm underline underline-offset-2 transition-colors">
                            {showAll ? t("reviews.show_less") : t("reviews.show_more")}
                        </button>
                    </div>
                )}

                <div className="max-w-xl mx-auto mt-16 reveal">
                    <div className="bg-white border border-gray-200 rounded-2xl p-8">
                        <h3 className="font-display text-xl text-[#2C3E50] mb-2">{t("reviews.form_title")}</h3>
                        <p className="text-sm text-[#2C3E50]/60 mb-6">{t("reviews.form_desc")}</p>
                        {submitted ? (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">{t("reviews.form_thanks")}</div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="text" placeholder={t("reviews.form_naam")} value={formName} onChange={(e) => setFormName(e.target.value)} required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]" />
                                <textarea placeholder={t("reviews.form_review")} value={formText} onChange={(e) => setFormText(e.target.value)} required rows={3}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] resize-none" />
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-[#2C3E50]/70">{t("reviews.form_rating")}</span>
                                    <div className="flex gap-1">
                                        {[1,2,3,4,5].map((star) => (
                                            <button key={star} type="button" onClick={() => setFormRating(star)} aria-label={`${star} ${language === "nl" ? "van 5 sterren" : "out of 5 stars"}`}>
                                                <Star size={20} className={star <= formRating ? 'text-[#FFD700] fill-[#FFD700]' : 'text-gray-300'} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <button type="submit" className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors">{t("reviews.form_verstuur")}</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}