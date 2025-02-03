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
    margin: 10px auto;
    padding: 0 clamp(8vw, 50px, 15vw);

    @media (min-width: 1200px) { 
        margin-left: 20vw;
    }
`;

const Logo = styled.h1`
    margin: 0;
    font-size: 2.7rem;
    font-weight: bold;
    color: #f0f0f0;
`;

export default function Header() {
    const sendMail = () => {
        window.location.href = "mailto:nidolight@icloud.com";
    };

    return (
        <HeaderContainer onClick={sendMail}>
            <ContentWrapper>
                <Logo>Junho Hur</Logo>
            </ContentWrapper>
        </HeaderContainer>
    );
}
