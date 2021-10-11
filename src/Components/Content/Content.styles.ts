import styled from '@emotion/styled';

export const Container = styled.div`
    text-align: center;
    margin: auto;
    width: 100%;
    max-width: 60rem;
`;

export const Image = styled.img`
    padding: 0rem 4rem;
    object-fit: contain;
    max-width: calc(100% - 8rem);
    max-height: 40rem;
`;

export const TextContainer = styled.div`
    padding: 0rem 2rem;
    margin-top: 4rem;
`;

export const Heading = styled.h2`
    white-space: pre-line;
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
