import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from 'Styles/Colours';

interface PageProps {
    open: boolean;
}

export const Container = styled.div<PageProps>`
    ${(props) =>
        props.open &&
        css`
            overflow: hidden;
            height: 100vh;
        `}
`;

export const Footer = styled.footer`
    background-color: ${Theme.dark.card};
    padding: 2rem;

    a {
        font-weight: 600;
        text-decoration: none;
        color: ${Theme.dark.text};

        &:hover {
            text-decoration: underline;
        }
    }
`;
