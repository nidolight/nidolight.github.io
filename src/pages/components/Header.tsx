import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 2vh 0;
    background-color: #111;
    transition: background-color 0.3s ease;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 1.5vh 0;
    }
`;

const ContentWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(8vw, 50px, 15vw);
`;

const Logo = styled.h1`
    margin: 0;
    font-size: 2.7rem; /* 동일한 폰트 크기 */
    font-weight: bold;
    color: #f0f0f0; /* ProjectsTitle과 색상 통일 */
`;

export default function Header() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <HeaderContainer onClick={scrollToTop}>
            <ContentWrapper>
                <Logo>Junho Hur</Logo>
            </ContentWrapper>
        </HeaderContainer>
    );
}
