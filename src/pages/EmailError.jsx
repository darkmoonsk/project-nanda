import Header from "../components/header/Header"
import MainContainer from "../components/layout/MainContainer"
import PageContainer from "../components/layout/PageContainer"
import Error from "./../components/contact/Error";

function EmailError() {
  return (
    <PageContainer>
        <Header />
        <MainContainer>
            <Error />
        </MainContainer>
    </PageContainer>
  )
}

export default EmailError;