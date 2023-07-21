import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function MenuItem(props) {

    return (
        <li className={`
            font-bold text-2xl cursor-pointer
            transition-all duration-300
            border-b-4 border-transparent
        hover:border-rosa-medio     
        `}>
        <Link to={`${props.url}`}>
            {props.children}
        </Link>
        </li>
    )
}

export default MenuItem

MenuItem.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};