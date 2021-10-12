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
    const [check, setCheck] = useState(false);

    useScrollPosition(
        ({ currPos }) => {
            setCheck(currPos.y < window.innerHeight / 2.5);
        },
        [],
        elementRef
    );

    return (
        <Styles.Container ref={elementRef}>
            <Styles.CircleContainer>
                <Styles.Circle circleTransform={check} circleColour={Colours[gradient]} />
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
