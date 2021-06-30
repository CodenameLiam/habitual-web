import React, { FC } from 'react';
import { StyledWaveLeft } from '../Waves/Waves';
import * as Styles from './Section.styles';

interface SectionProps {
    colour: string;
    background: string;
}

const Section: FC<SectionProps> = ({ colour, background }) => {
    return (
        <Styles.Section colour={colour} background={background}>
            <StyledWaveLeft background={background} />
            <p>Testing testing 123</p>
        </Styles.Section>
    );
};

export default Section;
