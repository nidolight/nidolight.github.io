import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import styled from "styled-components";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* 화면 전체 높이 */
`;

const ContentWrapper = styled.div`
    flex: 1; /* 남은 공간을 채움 */
    padding-top: 8vh; /* 헤더 높이만큼 여백 추가 */
`;

export default function Home() {
    return (
        <PageWrapper>
            <Header />
            <ContentWrapper>
                <MainContent />
            </ContentWrapper>
            <Footer />
        </PageWrapper>
    );
}
