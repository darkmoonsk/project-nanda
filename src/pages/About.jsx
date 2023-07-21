import { useState } from "react";
import MainContainer from "../components/layout/MainContainer";
import PageContainer from "../components/layout/PageContainer";
import portuguese from "../languages/portuguese";
import Header from "../components/header/Header";
import Card from "../components/card/Card";
import Banner from "../components/banner/Banner";

export default function About() {
    const [ currentLanguage, setCurrentLanguage ] = useState(portuguese);

    return (
        <PageContainer>
            <Header />
            <MainContainer>
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
            </MainContainer>
        </PageContainer>
    );
}
