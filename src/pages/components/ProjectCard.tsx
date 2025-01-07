import styled from "styled-components";
import { IoIosLink } from "react-icons/io";
import { JSX } from "react";

const CardContainer = styled.div`
    width: 40%;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #444;
    color: #ddd;
    text-align: left;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 16px;
    }
`;

const Title = styled.a`
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
    color: #ddd;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
        text-decoration: underline;
        color: #fff;
    }
`;

const Description = styled.p`
    margin: 8px 0 12px;
    font-size: 1rem;
    color: #aaa;
`;

const TechnologiesSection = styled.div`
    margin: 8px 0;
`;

const TechCategory = styled.div`
    font-size: 0.8rem;
    margin-bottom: 4px;
    color: #ccc;
`;

const Status = styled.div`
    margin-top: 12px;
    font-size: 0.75rem;
    color: #888;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const StatusIcon = styled.span`
    width: 10px;
    height: 10px;
    background-color: #4caf50;
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
    technologies: { [key: string]: string[] };
    status: string;
}): JSX.Element {
    return (
        <CardContainer>
            <Title href={url} target="_blank" rel="noopener noreferrer">
                {title}
                <IoIosLink />
            </Title>
            <Description>{description}</Description>
            <TechnologiesSection>
                {Object.entries(technologies).map(([category, items], index) => (
                    <TechCategory key={index}>
                        - {category.charAt(0).toUpperCase() + category.slice(1)}:{" "}
                        {items.join(", ")}
                    </TechCategory>
                ))}
            </TechnologiesSection>
            <Status>
                <StatusIcon />
                Available from {status}
            </Status>
        </CardContainer>
    );
}
