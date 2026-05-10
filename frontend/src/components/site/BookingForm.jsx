import { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { nl, enUS } from "date-fns/locale";
import { CalendarIcon, Loader2, ArrowRight, CheckCircle2, Phone, Mail, Clock, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n/LanguageContext";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const initial = { name: "", email: "", phone: "", company: "", service_type: "", location: "", duration: "", message: "" };

export default function BookingForm() {
    const { t, language } = useTranslation();
    const dateLocale = language === "nl" ? nl : enUS;
        const [form, setForm] = useState(initial);
    const [date, setDate] = useState(undefined);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    const [honeypot, setHoneypot] = useState(""); // anti-spam

    const update = (k, v) => {
        setForm((p) => ({ ...p, [k]: v }));
        setErrors((p) => ({ ...p, [k]: null }));
    };

        const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = t("booking.error_naam");
        if (!form.email.trim()) e.email = t("booking.error_email");
        else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = t("booking.error_email_invalid");
        if (!form.phone.trim()) e.phone = t("booking.error_telefoon");
        if (!form.service_type) e.service_type = t("booking.error_dienst");
        if (!form.location.trim()) e.location = t("booking.error_locatie");
        if (!form.duration.trim()) e.duration = t("booking.error_duur");
        if (!date) e.date = t("booking.error_datum");
        setErrors(e);
        return Object.keys(e).length === 0;
    };

        const handleSubmit = async (e) => {
        e.preventDefault();
        // Honeypot check — if filled, it's a bot
        if (honeypot) return;
                if (!validate()) {
            toast.error(t("booking.error_required"));
            return;
        }
        setSubmitting(true);
        try {
            await axios.post(`${API}/bookings`, {
                ...form,
                start_date: format(date, "yyyy-MM-dd"),
            });
                        setSuccess(true);
            toast.success(t("booking.success_highlight"));
            setForm(initial);
            setDate(undefined);
        } catch (err) {
            const msg = err?.response?.data?.detail?.[0]?.msg || err?.response?.data?.detail || "Er ging iets mis. Probeer het opnieuw.";
            toast.error(typeof msg === "string" ? msg : "Er ging iets mis.");
        } finally {
            setSubmitting(false);
        }
    };

    const inputCls = (hasErr) => cn(
        "bg-white rounded-lg h-11 text-[#2C3E50] placeholder:text-[#2C3E50]/35 focus-visible:ring-2 focus-visible:ring-[#B8860B]/30",
        hasErr ? "border-red-400 focus-visible:border-red-500" : "border-black/10 focus-visible:border-[#B8860B]"
    );

    return (
        <section id="aanvragen" data-testid="booking-section" className="section-padding bg-[#FAF8F4]">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14 reveal">
                    <div className="inline-flex items-center gap-2 bg-[#B8860B]/10 text-[#B8860B] px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase mb-5">
                        {t("booking.badge")}
                    </div>
                                        <h2 className="text-[#2C3E50]">
                        {t("booking.title")} <span className="text-[#B8860B]">{t("booking.title_highlight")}</span>.
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-[#2C3E50]/65">
                        {t("booking.subtitle")}
                    </p>
                </div>

                <div id="contact" className="grid lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Contact info */}
                    <div className="lg:col-span-4 reveal">
                        <div className="bg-[#2C3E50] text-white rounded-2xl p-7 md:p-8 h-full">
                            <h3 className="font-display text-2xl md:text-3xl mb-6 leading-tight">
                                {t("booking.contact_title")} <span className="text-[#B8860B]">{t("booking.contact_highlight")}</span>
                            </h3>
                                                        <div className="space-y-4">
                                <a href="tel:0643690981" className="flex items-start gap-3 group">
                                    <div className="w-9 h-9 rounded-lg bg-[#B22222] flex items-center justify-center shrink-0">
                                        <Phone size={15} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] text-white/55 mb-0.5">{t("booking.telefoon")}</div>
                                        <div className="text-sm font-medium group-hover:text-[#B8860B] transition-colors">06 4369 0981</div>
                                    </div>
                                </a>
                                <a href="mailto:info@klusbedrijf-eerlijkheid.nl" className="flex items-start gap-3 group">
                                    <div className="w-9 h-9 rounded-lg bg-[#B22222] flex items-center justify-center shrink-0">
                                        <Mail size={15} className="text-white" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[11px] text-white/55 mb-0.5">{t("booking.email")}</div>
                                        <div className="text-[13px] font-medium group-hover:text-[#B8860B] transition-colors break-all">info@klusbedrijf-eerlijkheid.nl</div>
                                    </div>
                                </a>
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-[#B22222] flex items-center justify-center shrink-0">
                                        <MapPin size={15} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] text-white/55 mb-0.5">{t("booking.werkgebied")}</div>
                                        <div className="text-sm font-medium">{t("footer.werkgebied")}</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-[#B22222] flex items-center justify-center shrink-0">
                                        <Clock size={15} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] text-white/55 mb-0.5">{t("booking.bereikbaar")}</div>
                                        <div className="text-sm font-medium">{t("booking.bereikbaar_tijden")}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-7 pt-6 border-t border-white/10">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-xs font-medium tracking-wider uppercase">{t("booking.nu_bereikbaar")}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form / success */}
                    <div className="lg:col-span-8 reveal reveal-delay-2">
                        {success ? (
                            <div data-testid="booking-success" className="bg-white rounded-2xl shadow-soft p-10 md:p-14 text-center h-full flex flex-col items-center justify-center border border-black/5">
                                                                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                                    <CheckCircle2 size={36} className="text-emerald-500" />
                                </div>
                                <h3 className="font-display text-3xl md:text-4xl text-[#2C3E50] mb-3 leading-tight">
                                    {t("booking.success_title")} <span className="text-[#B8860B]">{t("booking.success_highlight")}</span>
                                </h3>
                                <p className="text-[#2C3E50]/65 max-w-md mb-6">
                                    {t("booking.success_desc")}
                                </p>
                                <button
                                    onClick={() => setSuccess(false)}
                                    className="text-[#B8860B] font-medium hover:underline"
                                >
                                    {t("booking.success_again")}
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} data-testid="booking-form" noValidate className="bg-white rounded-2xl shadow-soft border border-black/5 p-6 md:p-8 space-y-5">
                                {/* Honeypot — verborgen voor echte gebruikers, zichtbaar voor bots */}
                                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0 }}>
                                    <label htmlFor="website">Website</label>
                                    <input id="website" name="website" type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
                                </div>
                                                                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                                    <div className="space-y-1.5">
                                        <Label className="text-xs font-semibold text-[#2C3E50]/75">{t("booking.naam")}</Label>
                                        <Input data-testid="form-name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder={t("booking.naam_placeholder")} className={inputCls(errors.name)} />
                                        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-xs font-semibold text-[#2C3E50]/75">{t("booking.bedrijf")}</Label>
                                        <Input data-testid="form-company" value={form.company} onChange={(e) => update("company", e.target.value)} placeholder={t("booking.bedrijf_placeholder")} className={inputCls(false)} />
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                                    <div className="space-y-1.5">
                                        <Label className="text-xs font-semibold text-[#2C3E50]/75">{t("booking.email_label")}</Label>
                                        <Input type="email" data-testid="form-email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder={t("booking.email_placeholder")} className={inputCls(errors.email)} />
                                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-xs font-semibold text-[#2C3E50]/75">{t("booking.telefoon_label")}</Label>
                                        <Input data-testid="form-phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder={t("booking.telefoon_placeholder")} className={inputCls(errors.phone)} />
                                        {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                                    <div className="space-y-1.5">
                                        <Label className="text-xs font-semibold text-[#2C3E50]/75">{t("booking.dienst")}</Label>
                                        <Select value={form.service_type} onValueChange={(v) => update("service_type", v)}>
                                            <SelectTrigger data-testid="form-service-type" className={cn(inputCls(errors.service_type), "w-full")}>
                                                <SelectValue placeholder={t("booking.dienst_placeholder")} />
                                            </SelectTrigger>
                                            <SelectContent className="bg-white border-black/10 rounded-lg">
                                                <SelectItem value="stukadoor">{t("booking.dienst_stukadoor")}</SelectItem>
                                                <SelectItem value="tegels">{t("booking.dienst_tegels")}</SelectItem>
                                                <SelectItem value="renovatie">{t("booking.dienst_renovatie")}</SelectItem>
                                                <SelectItem value="verf">{t("booking.dienst_verf")}</SelectItem>
                                                <SelectItem value="uitbouw">{t("booking.dienst_uitbouw")}</SelectItem>
                                                <SelectItem value="onderhoud">{t("booking.dienst_onderhoud")}</SelectItem>
                                                <SelectItem value="anders">{t("booking.dienst_anders")}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.service_type && <p className="text-xs text-red-500">{errors.service_type}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-xs font-semibold text-[#2C3E50]/75">{t("booking.datum")}</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <button type="button" data-testid="form-date-trigger" className={cn(inputCls(errors.date), "flex w-full items-center justify-between px-3 text-left text-sm", !date && "text-[#2C3E50]/40")}>
                                                    {date ? format(date, "d MMMM yyyy", { locale: dateLocale }) : t("booking.datum_placeholder")}
                                                    <CalendarIcon size={16} className="text-[#2C3E50]/40" />
                                                </button>
                                            </PopoverTrigger>
                                            <PopoverContent align="start" className="w-auto p-0 bg-white border-black/10 rounded-lg">
                                                <Calendar mode="single" selected={date} onSelect={(d) => { setDate(d); setErrors((p) => ({ ...p, date: null })); }} disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))} initialFocus locale={dateLocale} />
                                            </PopoverContent>
                                        </Popover>
                                        {errors.date && <p className="text-xs text-red-500">{errors.date}</p>}
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                                    <div className="space-y-1.5">
                                        <Label className="text-xs font-semibold text-[#2C3E50]/75">{t("booking.locatie")}</Label>
                                        <Input data-testid="form-location" value={form.location} onChange={(e) => update("location", e.target.value)} placeholder={t("booking.locatie_placeholder")} className={inputCls(errors.location)} />
                                        {errors.location && <p className="text-xs text-red-500">{errors.location}</p>}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <Label className="text-xs font-semibold text-[#2C3E50]/75">{t("booking.duur")}</Label>
                                            <Input data-testid="form-duration" value={form.duration} onChange={(e) => update("duration", e.target.value)} placeholder={t("booking.duur_placeholder")} className={inputCls(errors.duration)} />
                                            {errors.duration && <p className="text-xs text-red-500">{errors.duration}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <Label className="text-xs font-semibold text-[#2C3E50]/75">{t("booking.omschrijving")}</Label>
                                    <Textarea data-testid="form-message" value={form.message} onChange={(e) => update("message", e.target.value)} placeholder={t("booking.omschrijving_placeholder")} rows={4} className="bg-white border-black/10 rounded-lg text-[#2C3E50] placeholder:text-[#2C3E50]/35 focus-visible:ring-2 focus-visible:ring-[#B8860B]/30 focus-visible:border-[#B8860B]" />
                                </div>
                                <button type="submit" disabled={submitting} data-testid="form-submit" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#9A7209] disabled:opacity-60 text-white font-medium text-sm px-7 py-3.5 rounded-full shadow-[0_8px_24px_-8px_rgba(184,134,11,0.45)] transition-all">
                                    {submitting ? (<><Loader2 size={16} className="animate-spin" />{t("booking.verzenden")}</>) : (<>{t("booking.verstuur")}<ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" /></>)}
                                </button>
                                <p className="text-xs text-[#2C3E50]/45">{t("booking.akkoord")}</p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
