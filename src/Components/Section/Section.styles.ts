import styled from '@emotion/styled';

interface SectionProps {
    colour: string;
    background: string;
}

export const Section = styled.section<SectionProps>`
    z-index: 1;
    position: relative;
    height: 500px;
    color: ${(props) => props.colour};
    background-color: ${(props) => props.background};
`;
