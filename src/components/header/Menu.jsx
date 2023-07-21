import { useContext } from "react";
import MenuItem from "./MenuItem";
import { LanguageContext } from "../../contexts/LanguageContext";

function Menu() {
    const { currentLanguage } = useContext(LanguageContext);
    return (
        <nav>
            <ul className="flex gap-5">
                <MenuItem url="/">{currentLanguage.navbar.home}</MenuItem>
                <MenuItem url="/about">{currentLanguage.navbar.about}</MenuItem>
                <MenuItem url="#">{currentLanguage.navbar.contact}</MenuItem>
            </ul>
        </nav>
    );
}

export default Menu;
