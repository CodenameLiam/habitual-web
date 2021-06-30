import { css } from '@emotion/react';
import styled from '@emotion/styled';

// ----------------------------------------------------------------------------------------------------------
// Interfaces
// ----------------------------------------------------------------------------------------------------------
interface FlipTextLayout {
    onNewLine?: boolean;
}

interface FlipTextAnimation {
    delayDuration: string;
    delayOffset: number;
    inView?: boolean;
}

// ----------------------------------------------------------------------------------------------------------
// Container for the flip text component
// ----------------------------------------------------------------------------------------------------------
export const FlipTextContainer = styled.div<FlipTextLayout>`
    ${(props) =>
        props.onNewLine
            ? css`
                  white-space: pre-wrap;
              `
            : css`
                  display: flex;
                  flex-wrap: wrap;
              `}
`;

// ----------------------------------------------------------------------------------------------------------
// Card for an individual flipped word
// ----------------------------------------------------------------------------------------------------------
export const FlipTextCard = styled.div<FlipTextAnimation>`
    transform-style: preserve-3d;
    transition: transform 1s ease
        ${(props) => `calc(${props.delayOffset} * ${props.delayDuration})`};
    ${(props) =>
        props.inView
            ? css`
                  transform: rotateX(0deg) translateX(0rem);
              `
            : css`
                  transform: rotateX(-90deg) translateX(2rem);
              `}
`;

// ----------------------------------------------------------------------------------------------------------
// Flipped word, raised in 3D space
// ----------------------------------------------------------------------------------------------------------
export const FlipTextWord = styled.div<FlipTextAnimation>`
    transform-style: preserve-3d;
    transform: translateZ(6rem);
    white-space: break-spaces;
    opacity: ${(props) => (props.inView ? 1 : 0)};
    transition: opacity 1s ease ${(props) => `calc(${props.delayOffset} * ${props.delayDuration})`};
`;
