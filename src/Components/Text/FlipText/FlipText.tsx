import React, { FC } from 'react';
import InView from 'react-intersection-observer';
import { FlipTextCard, FlipTextContainer, FlipTextWord } from './FlipText.styles';

interface FlipTextProps {
    delayDuration?: string;
    delayOffset?: number;
    threshold?: number;
    onNewLine?: boolean;
    stutterIndex?: number;
    triggerOnce?: boolean;
}

const getDelay = (index: number, stutterIndex?: number): number => {
    if (!stutterIndex) {
        return index;
    } else {
        return index >= stutterIndex ? index + 10 : index;
    }
};

const FlipText: FC<FlipTextProps> = ({
    children,
    onNewLine,
    stutterIndex,
    delayDuration = '100ms',
    delayOffset = 0,
    threshold = 0,
    triggerOnce = true,
}) => {
    return (
        <InView triggerOnce={triggerOnce} threshold={threshold}>
            {({ inView, ref }) => (
                <FlipTextContainer ref={ref} onNewLine={onNewLine}>
                    {children
                        ?.toString()
                        .split(onNewLine ? '\n' : ' ')
                        .map((word, index) => {
                            const delayWord = getDelay(index, stutterIndex);
                            return (
                                <FlipTextCard
                                    key={word + index}
                                    delayDuration={delayDuration}
                                    delayOffset={delayWord + delayOffset}
                                    inView={inView}>
                                    <FlipTextWord
                                        delayDuration={delayDuration}
                                        delayOffset={delayOffset}
                                        inView={inView}>
                                        {word + ' '}
                                    </FlipTextWord>
                                </FlipTextCard>
                            );
                        })}
                </FlipTextContainer>
            )}
        </InView>
    );
};

export default FlipText;
