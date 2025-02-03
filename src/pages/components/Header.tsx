import styled from "styled-components";
import { FaGithub } from "react-icons/fa"; // 깃허브 아이콘 추가

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
    display: flex;
    justify-content: space-between; /* 로고와 아이콘을 양쪽으로 배치 */
    align-items: center;

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

const GithubIcon = styled.a`
    font-size: 2rem;
    color: #f0f0f0;
    transition: color 0.3s ease;
    
    &:hover {
        color: #888;
    }
`;

export default function Header() {
    const sendMail = () => {
        window.location.href = "mailto:nidolight@icloud.com";
    };

    // 아이콘 클릭 시 이벤트 버블링 방지
    const handleGithubClick = (event: React.MouseEvent) => {
        event.stopPropagation(); // 부모 요소(HeaderContainer)로 이벤트 전달 방지
    };

    return (
        <HeaderContainer onClick={sendMail}>
            <ContentWrapper>
                <Logo>Junho Hur</Logo>
                <GithubIcon 
                    href="https://github.com/nidolight" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleGithubClick} // 이벤트 버블링 방지
                >
                    <FaGithub />
                </GithubIcon>
            </ContentWrapper>
        </HeaderContainer>
    );
}
