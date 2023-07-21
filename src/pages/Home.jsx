
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import MainContainer from "../components/layout/MainContainer";
import PageContainer from "../components/layout/PageContainer";
import LanguageSlider from "../components/Slider/LanguageSlider";

export default function Home() {

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

