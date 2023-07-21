import React, { useState,  } from "react";
import Card from "../components/card/Card";
import Header from "../components/header/Header";
import portuguese from "../languages/portuguese";
import Banner from "../components/banner/Banner";
import MainContainer from "../components/layout/MainContainer";
import PageContainer from "../components/layout/PageContainer";
import LanguageSlider from "../components/Slider/LanguageSlider";

function Home() {
    const [ currentLanguage, setCurrentLanguage ] = useState(portuguese);

    return (
        <PageContainer >
            <Header />
            <MainContainer>
                <Banner />
                <LanguageSlider />
            </MainContainer>
        </PageContainer>
    );
}

export default Home;
