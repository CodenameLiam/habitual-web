import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Check, Circle } from 'Assets/Assets';
import { FC, useRef, useState } from 'react';
import { Colours } from 'Styles/Colours';
import * as Styles from './Habit.styles';

interface HabitProps {
    text: string;
    icon: string;
    gradient: keyof typeof Colours;
}

const Habit: FC<HabitProps> = ({ text, icon, gradient }) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [transformSize, setTransformSize] = useState(1);
    const [check, setCheck] = useState(false);

    useScrollPosition(
        ({ currPos }) => {
            setTransformSize(
                Math.max(
                    1,
                    (window.innerHeight - window.innerHeight / 4 - currPos.y) /
                        (window.innerHeight / 50)
                )
            );
            setCheck(currPos.y < window.innerHeight / 2.8);
        },
        [],
        elementRef
    );

    return (
        <Styles.Container ref={elementRef}>
            <Styles.CircleContainer>
                <Styles.Circle circleSize={transformSize} circleColour={Colours[gradient]} />
                <Styles.Icon src={icon} />
            </Styles.CircleContainer>

            <Styles.Text>{text}</Styles.Text>
            <Styles.CheckContainer>
                {check ? <Styles.CheckIcon src={Check} /> : <Styles.CircleIcon src={Circle} />}
            </Styles.CheckContainer>
        </Styles.Container>
    );
};

export default Habit;
