import React, { JSX } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import projects from "./data/projects";
import Introduction from "./Introduction"; // Introduction 컴포넌트 import

const MainContainer = styled.main`
    flex: 1;
    padding: 2vh 0; /* 상하 여백 */
`;

const ContentWrapper = styled.div`
    max-width: 1200px; /* 콘텐츠 최대 너비 */
    margin: 0 auto; /* 좌우 중앙 정렬 */
    padding: 0 clamp(8vw, 50px, 15vw); /* 좌우 여백: 최소 50px, 선호값 8vw, 최대 15vw */
`;

const ProjectsTitle = styled.h2`
    margin-top: 32px;
    margin-bottom: 22px;
    font-size: 2rem; /* 더 큰 폰트 크기 */
    font-weight: bold; /* 두껍게 강조 */
    color: #f0f0f0; /* 더 밝은 색상 */
    text-align: left; /* 좌측 정렬 */
    display: inline-block; /* 글씨 길이만큼만 영역 설정 */
    border-bottom: 2px solid #444; /* 밑줄 추가 */
    padding-bottom: 8px; /* 텍스트와 밑줄 사이 여백 */
`;

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column; /* 세로 정렬 */
    align-items: flex-start; /* 좌측 정렬 */
`;

export default function MainContent(): JSX.Element {
    return (
        <MainContainer>
            <ContentWrapper>
                <Introduction /> {/* 소개 컴포넌트 */}
                <ProjectsTitle>Projects</ProjectsTitle>
                <ProjectsContainer>
                    {projects.map((project, index): JSX.Element => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            url={project.url}
                            description={project.description}
                            technologies={project.technologies}
                            status={project.status}
                        />
                    ))}
                </ProjectsContainer>
            </ContentWrapper>
        </MainContainer>
    );
}
