import styled from "styled-components";
import { RiCopyrightLine } from "react-icons/ri";
import { useState, useEffect } from "react";

// Footer 스타일 정의
const FooterContainer = styled.footer`
    padding: 20px 0; /* 위아래 패딩 */
    text-align: center; /* 중앙 정렬 */
    background-color: #111; /* 배경색 */
`;

const FooterText = styled.p`
    color: #fff; /* 텍스트 색상 */
    font-size: 14px;
    margin: 0;
`;

const Icon = styled(RiCopyrightLine)`
    margin-right: 8px;
    position: relative;
    top: 2px; /* 아이콘 아래로 살짝 조정 */
    color: #fff; /* 아이콘 색상 */
`;

const TimeText = styled.span`
    display: block;
    margin-top: 8px;
    color: #aaa; /* 시간 텍스트 색상 */
    font-size: 12px;
`;

export default function Footer() {
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const koreanTime = new Date(
                now.toLocaleString("en-US", { timeZone: "Asia/Seoul" })
            );
            const formattedTime = koreanTime.toLocaleTimeString(); // HH:MM:SS 형식
            setCurrentTime(formattedTime);
        };

        updateTime(); // 초기 시간 설정
        const interval = setInterval(updateTime, 1000); // 1초마다 업데이트

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    }, []);

    return (
        <FooterContainer>
            <FooterText>
                <Icon />
                2025 nidolight. All Rights Reserved.
            </FooterText>
            <TimeText>Current Korean Time: {currentTime}</TimeText>
        </FooterContainer>
    );
}
