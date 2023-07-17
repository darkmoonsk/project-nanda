import { useState } from "react";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import portuguese from "./languages/portuguese";
import Banner from "./components/banner/Banner";

function App() {
    const [ currentLanguage, setCurrentLanguage ] = useState(portuguese);

    return (
        <div className="lg:m-auto lg:w-4/5 h-screen">
            <Header />
            <main
                className={`
                p-8
            `}>
                <Banner />
                <Card
                    url="./nanda.jpg"
                    imageSize="h-96"
                    title={currentLanguage.about.title}
                    description={currentLanguage.about.description}
                />
                <Card 
                    url="./learning1-unsplash.jpg"
                    reverse
                    title={currentLanguage.services.title}
                    imageSize="h-96"
                    description={currentLanguage.services.description}
                    extras={currentLanguage.services.extras}
                />
            </main>
        </div>
    );
}

export default App;
