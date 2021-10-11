import styled from '@emotion/styled';
import { ColourType, Theme } from 'Styles/Colours';

export const Container = styled.div`
    position: relative;
    width: 90vw;
    max-width: 700px;
    height: 10vh;
    max-height: 200px;
    background-color: ${Theme.light.card};
    margin: 1rem auto;
    border-radius: clamp(0.5rem, 1vw, 1rem);
    overflow: hidden;
    display: flex;
    align-items: center;
`;

interface CircleProps {
    circleSize: number;
    circleColour: ColourType;
}

export const CircleContainer = styled.div`
    height: 10vh;
    max-height: 200px;
    width: 10vh;
    max-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Circle = styled.div<CircleProps>`
    position: absolute;
    height: 6vh;
    width: 6vh;
    border-radius: 100vh;
    max-height: 100px;
    max-width: 100px;
    background-color: green;
    transform: ${({ circleSize: transformSize }) => `scale(${transformSize})`};
    background: ${({ circleColour }) =>
        `linear-gradient(135deg, ${circleColour.start} 0%, ${circleColour.end} 100%)`};
`;

export const Icon = styled.img`
    position: absolute;
    height: 3vh;
    width: 3vh;
`;

export const Text = styled.span`
    text-align: left;
    flex: 1;
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(0.8rem, 4vw, 1.5rem);
    font-weight: 600;
    z-index: 1;
`;

export const CheckContainer = styled.div`
    height: 10vh;
    max-height: 200px;
    width: 10vh;
    max-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CheckIcon = styled.img`
    position: absolute;
    height: 2vh;
    width: 2vh;
`;

export const CircleIcon = styled.img`
    position: absolute;
    height: 1.5vh;
    width: 1.5vh;
`;
