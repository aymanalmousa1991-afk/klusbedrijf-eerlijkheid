import useReveal from "@/hooks/useReveal";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import GalleryStrip from "@/components/site/GalleryStrip";
import WhyUs from "@/components/site/WhyUs";
import TrustStrip from "@/components/site/TrustStrip";
import Reviews from '@/components/site/Reviews';
import BookingForm from "@/components/site/BookingForm";
import Faq from "@/components/site/Faq";
import Footer from "@/components/site/Footer";
import FloatingCall from "@/components/site/FloatingCall";
import CookieBanner from "@/components/site/CookieBanner";

export default function LandingPage() {
    useReveal();
    return (
        <main data-testid="landing-page" className="bg-[#FAF8F4] text-[#2C3E50] overflow-x-hidden">
            <Header />
            <Hero />
            <TrustStrip />
            <Services />
            <GalleryStrip />
            <WhyUs />
            <BookingForm />
            <Reviews />
            <Faq />
            <Footer />
            <FloatingCall />
            <CookieBanner />
        </main>
    );
}