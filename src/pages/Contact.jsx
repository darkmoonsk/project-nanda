import Header from "../components/header/Header"
import MainContainer from "../components/layout/MainContainer"
import PageContainer from "../components/layout/PageContainer"
import ContactForm from "./../components/contact/ContactForm";


function Contact() {
  return (
    <PageContainer>
        <Header />
        <MainContainer>
            <ContactForm />
        </MainContainer>
    </PageContainer>
  )
}

export default Contact