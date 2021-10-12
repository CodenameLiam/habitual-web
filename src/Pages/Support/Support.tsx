import React, { FC } from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeUp } from 'Styles/Animations';
import * as Styles from './Support.styles';

const Support: FC = () => {
    return (
        <Styles.Section id='coming-soon'>
            <Styles.Container>
                <Reveal keyframes={fadeUp} triggerOnce duration={1000}>
                    <Styles.Title>Contact Us</Styles.Title>
                </Reveal>
            </Styles.Container>
            <Styles.BackButton
                onClick={() =>
                    window.open('mailto:help.habitual@gmail.com?subject=Support Request')
                }>
                Send us an email
            </Styles.BackButton>
        </Styles.Section>
    );
};

export default Support;
