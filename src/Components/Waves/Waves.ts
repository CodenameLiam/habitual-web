import { ReactComponent as WaveLeft } from './../Waves/WaveLeft.svg';
import styled from '@emotion/styled';

interface WaveProps {
    background: string;
}

export const StyledWaveLeft = styled(WaveLeft)<WaveProps>`
    position: absolute;
    z-index: -1;
    top: -300px;
    left: 0;
    right: 0;
    width: 100%;
    fill: ${(props) => props.background};
`;
