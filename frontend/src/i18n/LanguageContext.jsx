import { createContext, useContext, useState, useEffect } from "react";
import nl from "./nl";
import en from "./en";

const translations = { nl, en };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("ke_lang") || "nl";
    } catch {
      return "nl";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("ke_lang", language);
    } catch {
      // ignore
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "nl" ? "en" : "nl"));
  };

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Fallback als er geen provider is — gewoon de key zelf teruggeven
    return { language: "nl", toggleLanguage: () => {}, t: (key) => key };
  }
  return ctx;
}
