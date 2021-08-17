import styled from '@emotion/styled';
import { ReactComponent as WaveLeft } from './../Waves/WaveLeft.svg';
import { ReactComponent as WaveRight } from './../Waves/WaveRight.svg';

interface SectionProps {
    colour?: string;
    background: string;
}

export const Section = styled.section<SectionProps>`
    z-index: 1;
    position: relative;
    font-weight: 500;
    color: ${(props) => props.colour};
    background-color: ${(props) => props.background};
    padding-top: 2rem;
    padding-bottom: 20rem;
`;

export const SectionWaveLeft = styled(WaveLeft)<SectionProps>`
    fill: ${(props) => props.background};
    position: absolute;
    z-index: -1;
    left: 0;
    top: -250px;
    width: 100%;
`;

export const SectionWaveRight = styled(WaveRight)<SectionProps>`
    fill: ${(props) => props.background};
    position: absolute;
    z-index: -1;
    left: 0;
    top: -250px;
    width: 100%;
`;
