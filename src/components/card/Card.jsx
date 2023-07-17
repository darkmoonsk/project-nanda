import PropTypes from 'prop-types';

export default function Card(props) {
  return (
    <div className={`
        p-4
        flex gap-9 max-md:flex-col max-md:items-center
        shadow-[rgb(0,0,0,0.2)] shadow-2xl
    `}>
        <img 
            src={props.url} 
            className={`
                rounded-lg shadow-[rgb(0,0,0,0.8)] shadow-lg
                max-w-[256px]
            `}
        />
        <div className={`
            flex flex-col max-md:items-center
        `}>
            <h1 className={`
                mb-4
                font-black text-rosa-escuro
            `}>{props.title}</h1>
            {props.description.map((text, i) => (
                <p key={i} className={`
                    mb-4 
                    text-xl text-rosa-escuro
                    max-md:text-center
                `}
                >{text}</p>
            ))}
        </div>
    </div>
  )
}

Card.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
}
