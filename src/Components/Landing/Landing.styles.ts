import styled from '@emotion/styled';
import { Theme } from '../../Styles/Colours';

export const Section = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${Theme.dark.background};
`;

export const Title = styled.h1`
    margin: 0;
    font-size: clamp(5rem, 10vw, 10rem);
    background: url(${process.env.PUBLIC_URL}/test.png);
    background-clip: text;
    animation: animateTitle 30s linear infinite;
    -webkit-text-fill-color: transparent;

    @keyframes animateTitle {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 129.5% 0%;
        }
    }
`;

export const SubTitle = styled.h2`
    color: ${Theme.dark.text};
    font-size: clamp(2rem, 2vw, 4rem);
`;
