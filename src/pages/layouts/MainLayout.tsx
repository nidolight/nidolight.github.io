import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const ContentWrapper = styled.div`
    flex: 1;
    padding-top: 8vh;
    background: #111;
`;

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <PageWrapper>
            <Header />
            <ContentWrapper>{children}</ContentWrapper>
            <Footer />
        </PageWrapper>
    );
}
