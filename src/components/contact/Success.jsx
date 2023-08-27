import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

function Success() {
    const { currentLanguage } = useContext(LanguageContext);

    return (
        <div className="
            flex flex-col items-center gap-4
        ">
            <h1 className="
                font-black
            ">{currentLanguage.emailSent.title}</h1>
            <h3 className="
                font-black
            ">{currentLanguage.emailSent.description}</h3>
        </div>
    )
}

export default Success