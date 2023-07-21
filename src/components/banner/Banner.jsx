import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function Banner() {
    const {currentLanguage} = useContext(LanguageContext);

    return (
        <div
            className={`
        p-8 lg:pl-32 mb-4 ml rounded-t flex flex-col justify-center relative
        w-full min-h-[40px] bg-gradient-to-r from-pele to-pele-escuro
        
    `}
        >
            <h1 className={`
                mb-8 font-black text-shadow text-rosa-medio
                text-2xl max-w-[650px] drop-shadow-2xl
            `}>
                {currentLanguage.banner.description}
            </h1>
            <h2 className={`
                text-rosa-escuro font-medium text-xl
            `}>{currentLanguage.banner.slogan}</h2>

            <img src="./icon-lang.png" alt="Icone de linguagens" className={`w-32 absolute right-8 max-xl:hidden`}/>
        </div>
    );
}
