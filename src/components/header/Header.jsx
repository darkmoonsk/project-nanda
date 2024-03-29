import LanguageSelector from "./LanguageSelector";
import Menu from "./Menu";

function Header() {
    return (
        <header
            className="
                flex flex-col gap-12 w-full min-h-64 items-center justify-between    
                mt-4 pl-4 pr-4 pb-6 border-pele-escuro border-b-2           
                lg:flex-row lg:pl-32 lg:pr-32 lg:items-end
                "
        >
            <LanguageSelector />
            <img
                className="w-96 rounded-3xl opacity-60 drop-shadow-xl"
                src="./logo.png"
                alt="logo"
            />
            <Menu />
        
        </header>
    );
}

export default Header;
