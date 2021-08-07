import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
