import { FC } from 'react';
import * as Styles from './Section.styles';

interface SectionProps {
    id?: string;
    colour: string;
    background: string;
    direction: 'left' | 'right';
}

const Section: FC<SectionProps> = ({ colour, background, direction, children }) => {
    return (
        <Styles.Section colour={colour} background={background}>
            {direction === 'left' ? (
                <Styles.SectionWaveLeft background={background} />
            ) : (
                <Styles.SectionWaveRight background={background} />
            )}
            {children}
        </Styles.Section>
    );
};

export default Section;
