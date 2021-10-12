import styled from '@emotion/styled';
import Gradient from 'Styles/Gradient';
import { Circles } from '../../Assets/Assets';
import { Colours, Theme } from '../../Styles/Colours';

export const Section = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: ${Theme.light.background};
`;

export const Container = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
`;

export const Title = styled.h1`
    text-align: center;
    margin: 0;
    font-size: clamp(4rem, 12vw, 10rem);
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

export const BackButton = styled.button`
    cursor: pointer;
    width: 60vw;
    max-width: 15rem;
    height: 3rem;
    background: ${Gradient(Colours.ORANGE)};
    border: none;
    border-radius: 0.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
`;
