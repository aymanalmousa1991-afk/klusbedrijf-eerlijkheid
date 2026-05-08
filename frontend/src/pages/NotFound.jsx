import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/site/Logo";
import Wordmark from "@/components/site/Wordmark";

export default function NotFound() {
    return (
                <div className="min-h-screen bg-white text-[#2C3E50] flex flex-col items-center justify-center px-6 text-center">
            <div className="flex items-center gap-3 mb-8">
                <Logo size={40} />
                <Wordmark size="lg" />
            </div>
            <div className="font-display text-[10rem] md:text-[14rem] leading-none text-[#B8860B]">404</div>
            <h1 className="font-display text-3xl md:text-5xl mb-3 mt-2">Pagina niet gevonden</h1>
            <p className="text-[#2C3E50]/65 max-w-md mb-8">
                De pagina die u zoekt bestaat niet of is verplaatst.
            </p>
            <Link
                to="/"
                data-testid="back-home"
                className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7209] text-white font-bold px-6 py-3 rounded-md transition-colors"
            >
                <ArrowLeft size={18} />
                Terug naar home
            </Link>
        </div>
    );
}
