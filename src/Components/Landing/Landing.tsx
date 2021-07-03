import { FC } from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeUp } from '../../Styles/Animations';
import FlipText from '../FlipText/FlipText';
// import { Sparkles } from '../Sparkles/Sparkles';
import * as Styles from './Landing.styles';

const Landing: FC = () => {
    return (
        <Styles.Section>
            {/* <Sparkles /> */}

            <Styles.Container>
                <Reveal keyframes={fadeUp} triggerOnce duration={1000}>
                    <Styles.Title>Habitual</Styles.Title>
                </Reveal>
                <Styles.SubTitle>
                    <FlipText delayOffset={5}>The Habit Tracking App</FlipText>
                </Styles.SubTitle>
            </Styles.Container>
        </Styles.Section>
    );
};

export default Landing;
