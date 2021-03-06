import styled from '@emotion/styled';
import { Circles } from '../../Assets/Assets';
import { GreyColours, Theme } from '../../Styles/Colours';
import { ReactComponent as WaveLeft } from './../Waves/WaveLeft.svg';

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
`;

export const LinkContainer = styled.div`
    display: flex;
    margin: 0.5rem;
`;

export const LinkButton = styled.button`
    margin: clamp(0.25rem, 1vw, 1rem);
    padding: 0rem;
    cursor: pointer;
    padding: none;
    background-color: unset;
    border: unset;
`;

export const LinkImage = styled.img`
    height: clamp(40px, 5vw, 50px);
`;

export const Title = styled.h1`
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

export const SubTitleColour = styled(Title)`
    font-size: clamp(2rem, 8vw, 6rem);
    animation: animateTitle 4000s linear infinite;
    margin-bottom: 2rem;
`;

export const SubTitle = styled.h2`
    font-weight: 600;
    color: ${GreyColours.GREY4};
    font-size: clamp(1.4rem, 3vw, 2.5rem);
`;

export const DownloadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -8rem;
`;

export const LandingWave = styled(WaveLeft)`
    fill: ${Theme.light.card};
    position: absolute;
    left: 0;
    bottom: -350px;
    width: 100%;
`;
