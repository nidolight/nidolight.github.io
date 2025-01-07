import React, {JSX} from "react";
import styled from "styled-components";

const IntroContainer = styled.div`

    text-align: left;
    color: #ccc;
    font-size: 1.1rem;
    line-height: 1.6;
`;

export default function Introduction(): JSX.Element {
    return (
        <IntroContainer>
            creating web applications and backend systems using modern technologies.
        </IntroContainer>
    );
}
