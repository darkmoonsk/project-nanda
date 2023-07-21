import { useContext } from "react"
import PropTypes from "prop-types"
import { LanguageContext } from "../../contexts/LanguageContext"

export default function SlideCard(props) {
    const {currentLanguage} = useContext(LanguageContext);
    const url = props.url

  return (
    <div className={`
        h-[800px] w-full bg-no-repeat bg-center bg-cover rounded-lg shadow-2xl 
        max-lg:h-[400px] 
    `}
    style={{
        backgroundImage: `url(${url})`
    }}
    >
        <div className={`
            flex flex-col justify-center items-center
            w-full h-full 
        `}
        style={{
            backgroundColor: "rgba(0,0,0,0.5)"
        }}
        >
            <h2 className={`
                text-center
                text-7xl max-md:text-4xl mb-20 max-md:mb-10 text-rosa-escuro font-black
            `}
            style={{
                textShadow: "5px 2px 4px #FFF9"
            }}
            >{currentLanguage.slide[props.language].title}</h2>
            <p className={`
                p-4
                text-4xl max-md:text-lg w-3/4 
            `}
            style={{
                textShadow: "5px 2px 10px #FFF8",
                backgroundColor: "#0008"
            }}
            >{currentLanguage.slide[props.language].slogan}</p>
        </div>
    </div>
  )
}

SlideCard.propTypes = {
    language: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


