import { useEffect } from "react";

export default function useReveal() {
    useEffect(() => {
        // Fallback: if IO is not supported, show all
        if (typeof IntersectionObserver === "undefined") {
            document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
            return;
        }
        const els = document.querySelectorAll(".reveal:not(.is-visible)");
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-visible");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.05, rootMargin: "0px 0px -10px 0px" }
        );
        els.forEach((el) => io.observe(el));
        // Failsafe: after 1500ms reveal anything still hidden (in case observer missed)
        const t = setTimeout(() => {
            document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight) el.classList.add("is-visible");
            });
        }, 1500);
        return () => { io.disconnect(); clearTimeout(t); };
    }, []);
}
