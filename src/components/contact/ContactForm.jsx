

function ContactForm() {
  return (
    <div className="
        flex flex-col justify-center items-center
    ">
        <h2 className="
            text-4xl font-black mb-5
        ">Contato</h2>
        <form className="
            w-[40rem] h-min[35.625rem] rounded-xl shadow-lg p-12
            flex flex-col items-center gap-4
        ">
            <label className="
                w-full
                font-black text-lg 
            ">Nome:</label>
            <input type="text" className="
                w-full h-12 p-4 text-2xl text-white font-black
                bg-black/20 outline-none drop-shadow-lg rounded-md
            "/>
            <label className="
                w-full
                font-black text-lg 
            ">Email:</label>
            <input type="email" className="
                w-full h-12 p-4 text-2xl text-white font-black
                bg-black/20 outline-none drop-shadow-lg rounded-md
            "/>
            <label className="
                w-full
                font-black text-lg
            ">Mensagem:</label>
            <textarea className="
                w-full h-72 p-4 r7esize-none text-white 
                bg-black/20 outline-none drop-shadow-lg 
            "></textarea>
            <button className="
                transition
                w-fit mt-4 px-8 py-3 bg-pele hover:bg-pele-escuro rounded-lg
                text-rosa-escuro font-black
            ">Enviar</button>
        </form>
    </div>
  )
}

export default ContactForm