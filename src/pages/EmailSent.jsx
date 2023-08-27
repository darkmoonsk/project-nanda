import Success from "../components/contact/Success"
import Header from "../components/header/Header"
import MainContainer from "../components/layout/MainContainer"
import PageContainer from "../components/layout/PageContainer"

function EmailSent() {
  return (
    <PageContainer>
        <Header />
        <MainContainer>
            <Success />
        </MainContainer>
    </PageContainer>
  )
}

export default EmailSent;