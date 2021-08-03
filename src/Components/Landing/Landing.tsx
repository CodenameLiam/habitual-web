import { FC } from 'react';
import Reveal, { Fade } from 'react-awesome-reveal';
import { AppStore, GooglePlay } from '../../Assets/Assets';
import { fadeUp } from '../../Styles/Animations';
import { Colours } from '../../Styles/Colours';
import Circle from '../Circle/Circle';
import FlipText from '../FlipText/FlipText';
import * as Styles from './Landing.styles';

const Landing: FC = () => {
    return (
        <Styles.Section id='landing'>
            <Styles.Container>
                <Reveal keyframes={fadeUp} triggerOnce duration={1000}>
                    <Styles.Title>Habitual</Styles.Title>
                </Reveal>
                <Styles.SubTitle>
                    <FlipText delayOffset={5}>Build a Better You.</FlipText>
                </Styles.SubTitle>
                <Reveal keyframes={fadeUp} triggerOnce duration={1000} delay={1000}>
                    <Styles.LinkContainer>
                        <Styles.LinkButton>
                            <Styles.LinkImage src={AppStore} />
                        </Styles.LinkButton>
                        <Styles.LinkButton>
                            <Styles.LinkImage src={GooglePlay} />
                        </Styles.LinkButton>
                    </Styles.LinkContainer>
                </Reveal>
            </Styles.Container>
            <Fade triggerOnce delay={1000} duration={1000} cascade damping={0.1}>
                <Circle
                    gradient={Colours.PURPLE}
                    size={['15rem', '25vw', '30rem']}
                    top={['-5rem', '-5vh', '-10rem']}
                    left={['-15rem', '-15vw', '-10rem']}
                    animation={3}
                />
                <Circle
                    gradient={Colours.TANGERINE}
                    size={['10rem', '18vw', '30rem']}
                    bottom={['8rem', '10vh', '10rem']}
                    left={['-10rem', '-8vw', '-5rem']}
                    animation={2}
                />
                <Circle
                    gradient={Colours.GREEN}
                    size={['6rem', '10vw', '25rem']}
                    bottom={['7rem', '10vh', '8rem']}
                    left={['2rem', '3vw', '3rem']}
                    animation={1}
                />
                <Circle
                    gradient={Colours.RED}
                    size={['10rem', '18vw', '25rem']}
                    top={['4rem', '10vh', '8rem']}
                    right={['-10rem', '-15vw', '-6rem']}
                    animation={5}
                />
                <Circle
                    gradient={Colours.SKY}
                    size={['3rem', '8vw', '10rem']}
                    top={['4rem', '5vh', '10rem']}
                    right={['1rem', '5vw', '8rem']}
                    animation={6}
                />
                <Circle
                    gradient={Colours.LIME}
                    size={['4rem', '6vw', '15rem']}
                    bottom={['6rem', '10vh', '12rem']}
                    right={['0rem', '4vw', '4rem']}
                    animation={4}
                />
            </Fade>
            <Styles.LandingWave />
        </Styles.Section>
    );
};

export default Landing;
