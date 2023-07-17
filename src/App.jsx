import { useState } from "react";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import portuguese from "./languages/portuguese";

function App() {
    const [ currentLanguage, setCurrentLanguage ] = useState(portuguese);

    return (
        <div className="lg:m-auto lg:w-4/5 h-screen">
            <Header />
            <main
                className={`
                p-8
            `}
            >
                <Card
                    url="./nanda.jpg"
                    title={currentLanguage.about.title}
                    description={currentLanguage.about.description}
                />
            </main>
        </div>
    );
}

export default App;
