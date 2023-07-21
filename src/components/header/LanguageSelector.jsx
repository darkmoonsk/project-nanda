import { useContext } from "react"
import { LanguageContext } from "../../contexts/LanguageContext"

export default function LanguageSelector() {
    const { currentLanguage, changeLanguage } = useContext(LanguageContext);


  return (
    <select value={currentLanguage.lang} onChange={changeLanguage}
    className={
        `
            absolute top-2 right-64 max-md:sticky max-md:right-0 max-md:top-0 max-md:self-end
            p-4 text-lg bg-pele text-sky-900 font-semibold rounded-md outline-none
        `
    }
    >
        <option value="pt" className="font-semibold">{currentLanguage.langs.portuguese}</option>
        <option value="de" className="font-semibold">{currentLanguage.langs.german}</option>
        <option value="es" className="font-semibold">{currentLanguage.langs.spanish}</option>
    </select>
  )
}
