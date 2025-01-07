import styled from "styled-components";
import { IoIosLink } from "react-icons/io"; // 링크 아이콘 import

const CardContainer = styled.div`
    width: 30%; /* 카드 너비를 전체 화면의 30%로 설정 */
    margin-bottom: 24px; /* 아래쪽 간격 */
    padding-bottom: 16px;
    border-bottom: 1px solid #444; /* 하단 테두리 */
    color: #ddd; /* 텍스트 색상 무채색 */
    text-align: left; /* 좌측 정렬 */

    @media (max-width: 768px) {
        width: 100%; /* 모바일에서는 전체 너비 사용 */
        margin-bottom: 16px;
    }
`;

const Title = styled.a`
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
    color: #ddd; /* 제목 색상 무채색 */
    display: flex; /* 아이콘과 텍스트를 나란히 정렬 */
    align-items: center; /* 수직 정렬 */
    gap: 8px; /* 아이콘과 텍스트 간격 */

    &:hover {
        text-decoration: underline;
        color: #fff; /* 호버 시 색상 강조 */
    }
`;

const Description = styled.p`
    margin: 8px 0 12px; /* URL 아래 여백 */
    font-size: 1rem;
    color: #aaa; /* 설명 색상 */
`;

const Technologies = styled.p`
    margin: 8px 0;
    font-size: 0.9rem;
    color: #ccc; /* 기술 스택 색상 */
    line-height: 1.6;
`;

const Status = styled.div`
    margin-top: 12px;
    font-size: 0.9rem;
    font-weight: bold;
    color: #888; /* 상태 색상 무채색 */
    display: flex; /* 아이콘과 텍스트 정렬 */
    align-items: center;
    gap: 8px; /* 아이콘과 텍스트 간격 */
`;

const StatusIcon = styled.span`
    width: 10px; /* 동그라미 크기 */
    height: 10px;
    background-color: #4caf50; /* 초록색 */
    border-radius: 50%;
    display: inline-block;
`;

export default function ProjectCard({
                                        title,
                                        url,
                                        description,
                                        technologies,
                                        status,
                                    }: {
    title: string;
    url: string;
    description: string;
    technologies: string;
    status: string;
}) {
    return (
        <CardContainer>
            <Title href={url} target="_blank" rel="noopener noreferrer">
                <IoIosLink /> {/* 아이콘 추가 */}
                {title}
            </Title>
            <Description>{description}</Description>
            <Technologies>{technologies}</Technologies>
            <Status>
                <StatusIcon />
                Available from {status}
            </Status>
        </CardContainer>
    );
}
