import { CSSProperties, FC } from 'react';
import * as Styles from './Sparkles.styles';

interface SparkleInstanceProps {
    size: string;
    top: string;
    left: string;
    colour: string;
}

export const SparkleInstance: FC<SparkleInstanceProps> = ({ size, left, top, colour }) => {
    const SparkleStyle: CSSProperties = {
        width: size,
        left: left,
        top: top,
        pointerEvents: 'none',
    };

    return (
        <Styles.Wrapper style={SparkleStyle}>
            <Styles.Instance colour={colour} />
        </Styles.Wrapper>
    );
};
