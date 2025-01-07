import React, { JSX } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import Introduction from "./Introduction";

const MainContainer = styled.main`
    flex: 1;
    padding: 2vh 0;
`;

const ContentWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(8vw, 50px, 15vw);
`;

const ProjectsTitle = styled.h2`
    margin-top: 32px;
    margin-bottom: 22px;
    font-size: 2rem;
    font-weight: bold;
    color: #f0f0f0;
    text-align: left;
    display: inline-block;
    border-bottom: 2px solid #444;
    padding-bottom: 8px;
`;

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export default function MainContent(): JSX.Element {
    const projects = [
        {
            title: "Tastea Deli",
            url: "https://tasteadeli.com/",
            description: "A full-stack web application for managing deli orders with a focus on scalability and performance.",
            technologies: {
                backend: ["Spring", "Clover API", "MySQL"],
                frontend: ["React", "Recoil"],
                infra: ["AWS (EC2, S3)", "Jenkins", "Docker-compose", "Nginx"],
            },
            status: "2024.10",
        },
        {
            title: "Next-NAS",
            url: "https://next-nas.uk/",
            description: "A Next.js-powered NAS manager for efficient file storage and retrieval with modern UX/UI.",
            technologies: {
                frontend: ["Next.js", "Redux", "Tailwind"],
                backend: ["Next.js (API Routes)", "Prisma"],
                infra: ["Cloudflare Tunnel", "Nginx"],
            },
            status: "2025.01",
        },
    ];

    return (
        <MainContainer>
            <ContentWrapper>
                <Introduction />
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
