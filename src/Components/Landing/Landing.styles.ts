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
    background-color: ${Theme.light.background};
`;

export const Container = styled.div`
    display: flex;
    z-index: 999;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.light.background};
    box-shadow: 0 0px 50px 50px ${Theme.light.background};
`;

export const Title = styled.h1`
    margin: 0;
    font-size: clamp(4rem, 8vw, 10rem);
    background: url(${process.env.PUBLIC_URL}/Images/Circles.png);
    background-clip: text;
    animation: animateTitle 20s linear infinite;
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
    color: ${Theme.dark.disabled};
    font-size: clamp(1.25rem, 2vw, 3rem);
`;
