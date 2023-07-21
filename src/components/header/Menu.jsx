import MenuItem from "./MenuItem";

function Menu() {
    return (
        <nav>
            <ul className="flex gap-5">
                <MenuItem url="/">Inicio</MenuItem>
                <MenuItem url="/about">Sobre</MenuItem>
                <MenuItem url="#">Contato</MenuItem>
            </ul>
        </nav>
    );
}

export default Menu;
