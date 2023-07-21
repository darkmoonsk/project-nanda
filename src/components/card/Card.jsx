import PropTypes from 'prop-types';

export default function Card(props) {
    const { imageSize, url, title, description, reverse } = props;
    const order1 = reverse ? "order-1" : "";
    const order2 = reverse ? "order-2" : "";

  return (
    <section className={`
        p-8 mb-10
        flex gap-9 max-xl:flex-col max-xl:items-center
        shadow-[rgb(0,0,0,0.2)] shadow-2xl
    `}>
        <img 
            src={url} 
            className={`
                rounded-lg shadow-[rgb(0,0,0,0.8)] shadow-lg
                ${imageSize} flex-shrink-0 ${order2}
            `}
        />
        <div className={`
            flex flex-col max-xl:items-center ${order1}
            text-rosa-escuro
        `}>
            <h1 className={`
                mb-6
                font-black max-md:text-2xl
            `}>{title}</h1>

            {description.map((text, i) => (
                <p key={i} className={`
                    mb-6 
                    text-xl
                `}>{text}</p>
            ))}
        </div>
    </section>
  )
}

Card.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageSize: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    extras: PropTypes.element,
    reverse: PropTypes.bool
}
