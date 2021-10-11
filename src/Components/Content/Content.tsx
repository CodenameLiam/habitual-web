import React, { FC, Fragment } from 'react';
import Reveal from 'react-awesome-reveal';
import { fadeUp } from 'Styles/Animations';

import * as Styles from './Content.styles';

interface ContentProps {
    img?: string;
    alt?: string;
    heading: string;
    body: string;
}

const Content: FC<ContentProps> = ({ img, alt, heading, body, children }) => {
    return (
        <Styles.Container>
            <Reveal
                triggerOnce
                keyframes={fadeUp}
                fraction={0.3}
                duration={1000}
                cascade
                damping={0.1}>
                <Fragment>{img && <Styles.Image src={img} alt={alt} />}</Fragment>
                <Fragment>{children}</Fragment>
                <Styles.TextContainer>
                    <Styles.Heading>{heading}</Styles.Heading>
                    <Styles.Body>{body}</Styles.Body>
                </Styles.TextContainer>
            </Reveal>
        </Styles.Container>
    );
};

export default Content;
