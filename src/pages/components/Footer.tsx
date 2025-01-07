import styled from "styled-components";
import { RiCopyrightLine } from "react-icons/ri";
import { useState, useEffect } from "react";

const FooterContainer = styled.footer`
    padding: 20px 0;
    text-align: center;
    background-color: #111;
`;

const FooterText = styled.p`
    color: #fff;
    font-size: 14px;
    margin: 0;
`;

const Icon = styled(RiCopyrightLine)`
    margin-right: 8px;
    position: relative;
    top: 2px;
    color: #fff;
`;

const TimeText = styled.span`
    display: block;
    margin-top: 8px;
    color: #aaa;
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
            const formattedTime = koreanTime.toLocaleTimeString();
            setCurrentTime(formattedTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
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
