import { FC } from 'react';
import Reveal from 'react-awesome-reveal';
import { useHistory } from 'react-router';
import { fadeUp } from 'Styles/Animations';
import * as Styles from './ComingSoon.styles';

const ComingSoon: FC = () => {
    const history = useHistory();

    return (
        <Styles.Section id='coming-soon'>
            <Styles.Container>
                <Reveal keyframes={fadeUp} triggerOnce duration={1000}>
                    <Styles.Title>Coming Soon</Styles.Title>
                </Reveal>
            </Styles.Container>
            <Styles.BackButton onClick={() => history.push('/')}>Back to Home</Styles.BackButton>
        </Styles.Section>
    );
};

export default ComingSoon;
