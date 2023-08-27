import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

function Error() {
    const { currentLanguage } = useContext(LanguageContext);

    return (
      <div className="
          flex flex-col items-center gap-4
      ">
          <h1 className="
              font-black text-red-500
          ">{currentLanguage.emailError.title}</h1>
          <h3 className="
              font-black
          ">{currentLanguage.emailError.description}</h3>
      </div>
    )
  }
  
  export default Error;