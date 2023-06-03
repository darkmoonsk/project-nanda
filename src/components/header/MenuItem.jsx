import PropTypes from "prop-types"

function MenuItem(props) {

    return (
        <li>
        <a href={props.url} className="
            font-bold text-2xl
            transition-all duration-200
            hover:border-b-4 hover:border-rosa-medio     
        "
        >
        {props.children}
        </a>
        </li>
    )
}

export default MenuItem

MenuItem.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};