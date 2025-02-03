import styled from "styled-components";
import { RiCopyrightLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md"; 
import { useState, useEffect } from "react";

const FooterContainer = styled.footer`
    padding: 20px 0;
    text-align: center;
    background-color: #111;
    color: #fff;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

const FooterText = styled.p`
    margin: 0;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
`;

const Icon = styled(RiCopyrightLine)`
    color: #aaa;
    font-size: 16px;
`;

const EmailWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const EmailIcon = styled(MdEmail)`
    font-size: 16px;
    color: #bbb;
`;

const EmailLink = styled.a`
    color: #bbb; /* 무채색 계열 */
    text-decoration: none;
    font-weight: normal;
    transition: color 0.3s ease, text-decoration 0.3s ease;

    &:hover {
        color: #ddd; /* 밝은 회색 */
        text-decoration: underline;
    }
`;

const TimeText = styled.span`
    color: #aaa;
    font-size: 12px;
    margin-top: 8px;
`;

export default function Footer() {
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const koreanTime = new Date(
                now.toLocaleString("en-US", { timeZone: "Asia/Seoul" })
            );
            const formattedTime = koreanTime.toLocaleTimeString("en-US", { 
                hour12: true, // AM/PM 형식 사용
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
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
            <EmailWrapper>
                <EmailIcon />
                <EmailLink href="mailto:nidolight@icloud.com">
                    nidolight@icloud.com
                </EmailLink>
            </EmailWrapper>
            <TimeText>Current Korean Time: {currentTime}</TimeText>
        </FooterContainer>
    );
}
