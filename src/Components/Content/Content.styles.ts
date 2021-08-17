import styled from '@emotion/styled';
import { GreyColours } from 'Styles/Colours';

export const Container = styled.div`
    text-align: center;
    margin: auto;
    width: 100%;
    max-width: 60rem;
`;

export const Image = styled.img`
    padding: 3rem;
    object-fit: contain;
    max-width: calc(100% - 6rem);
    max-height: 40rem;
`;

export const TextContainer = styled.div`
    white-space: pre-line;
    color: ${GreyColours.GREY4};
    padding: 0rem 2rem;
`;

export const Heading = styled.h2`
    font-weight: 600;
    font-size: clamp(1.4rem, 3vw, 2.5rem);
    @media only screen and (max-width: 600px) {
        white-space: normal;
    }
`;

export const Body = styled.p`
    font-size: clamp(1rem, 2vw, 1.25rem);
    max-width: 40rem;
    margin: auto;
`;
