import { useContext, useRef } from "react";
import RequiredSignal from "./RequiredSignal";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";

function ContactForm() {
    const { currentLanguage } = useContext(LanguageContext);
    const navigate = useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID, 
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            form.current, 
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then((result) => {
                console.log(result.text);
                navigate("/emailSent")
            }, (error) => {
                console.log(error.text);
            })
    }

    return (
        <div className="
            flex flex-col justify-center items-center
        ">
            <h2 className="
                text-4xl font-black mb-5
            ">{currentLanguage.contactForm.title}</h2>
            <form ref={form} onSubmit={sendEmail} className="
                w-full max-w-[40rem] h-min[35.625rem] rounded-xl shadow-lg p-12
                flex flex-col items-center gap-4
            ">
                <label className="
                    w-full
                    font-black text-lg 
                ">{currentLanguage.contactForm.name}: <RequiredSignal /></label>
                <input type="text" className="
                    w-full h-12 p-4 text-2xl text-white font-black
                    bg-black/20 outline-none drop-shadow-lg rounded-md
                " required name="user_name" />
                <label className="
                    w-full
                    font-black text-lg 
                ">{currentLanguage.contactForm.email} <RequiredSignal /></label>
                <input type="email" className="
                    w-full h-12 p-4 text-2xl text-white font-black
                    bg-black/20 outline-none drop-shadow-lg rounded-md
                " required name="user_email"/>
                <label className="
                    w-full
                    font-black text-lg 
                ">{currentLanguage.contactForm.phone}: </label>
                <input type="tel" className="
                    w-full h-12 p-4 text-2xl text-white font-black
                    bg-black/20 outline-none drop-shadow-lg rounded-md
                    placeholder:text-white
                " placeholder="+49 000 000000" name="user_cel"/>
                <label className="
                    w-full
                    font-black text-lg 
                ">{currentLanguage.contactForm.type}: <RequiredSignal /></label>
                <select className="
                    w-full p-4 text-white font-black
                    bg-black/20 outline-none drop-shadow-lg rounded-md
                " required name="person_type">
                    <option value="fisica" >{currentLanguage.contactForm.personType.natural}</option>
                    <option value="juridica">{currentLanguage.contactForm.personType.legal}</option>
                </select>
                <label className="
                    w-full
                    font-black text-lg 
                ">{currentLanguage.contactForm.language}: <RequiredSignal /></label>
                <select className="
                    w-full p-4 text-white font-black
                    bg-black/20 outline-none drop-shadow-lg rounded-md
                " required name="language">
                    <option value="alemao" >{currentLanguage.langs.german}</option>
                    <option value="espanhol">{currentLanguage.langs.spanish}</option>
                    <option value="espanhol">{currentLanguage.langs.portuguese}</option>
                </select>
                <label className="
                    w-full
                    font-black text-lg
                ">{currentLanguage.contactForm.message}:</label>
                <textarea className="
                    w-full h-72 p-4 resize-none text-white 
                    bg-black/20 outline-none drop-shadow-lg 
                " name="message" ></textarea>
                <button className="
                    transition
                    w-fit mt-4 px-8 py-3 bg-pele hover:bg-pele-escuro rounded-lg
                    text-rosa-escuro font-black
                ">{currentLanguage.contactForm.send}</button>
            </form>
        </div>
    )
}

export default ContactForm