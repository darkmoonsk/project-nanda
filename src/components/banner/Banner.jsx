export default function Banner() {
    return (
        <div
            className={`
        p-8 lg:pl-32 mb-4 ml rounded-t flex flex-col justify-center relative
        w-full min-h-[40px] bg-gradient-to-r from-pele to-pele-escuro
        
    `}
        >
            <h1 className={`
                mb-8 font-black text-shadow text-rosa-medio
                text-2xl max-w-[650px] drop-shadow-2xl
            `}>
                Abra caminhos, ultrapasse fronteiras e explore o mundo através
                da fluência em uma nova língua com Fernanda Schubert.
            </h1>
            <h2 className={`
                text-rosa-escuro font-medium text-xl
            `}>Transformando palavras em pontes para novas oportunidades</h2>

            <img src="./icon-lang.png" alt="Icone de linguagens" className={`w-32 absolute right-8 max-xl:hidden`}/>
        </div>
    );
}
