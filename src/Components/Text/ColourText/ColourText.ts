import styled from '@emotion/styled';
import { Circles } from 'Assets/Assets';

export const ColourText = styled.h1`
    margin: 0;
    font-size: clamp(4rem, 8vw, 10rem);
    background: url(${Circles});
    background-clip: text;
    background-size: max(10rem, 20vw);
    background-position-x: 100%;
    background-repeat: repeat;
    animation: animateTitle 1500s linear infinite;
    -webkit-text-fill-color: transparent;

    @keyframes animateTitle {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: -10000% 50%;
        }
    }
`;
