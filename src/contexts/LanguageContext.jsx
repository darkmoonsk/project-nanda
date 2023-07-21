/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import portuguese from "../languages/portuguese";
import german from "../languages/german";
import spanish from "../languages/spanish";

const language = navigator.language;
const defaultLanguage = language === "de"? german : language === "es"? spanish : portuguese;

export const LanguageContext = createContext({});

export function LanguageProvider({children}) {
    const [currentLanguage, setCurrentLenguage] = useState(defaultLanguage);


    const changeLanguage = (event) => {
        const lang = event.target.value;

        if(lang === "pt") {
            setCurrentLenguage(portuguese);
        } else if (lang === "de") {
            setCurrentLenguage(german);
        } else if (lang === "es") {
            setCurrentLenguage(spanish);
        } else {
            setCurrentLenguage(portuguese);
        }
    }

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage}}>
        {children}
    </LanguageContext.Provider>
  )
}

