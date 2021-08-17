import React, { Fragment } from 'react';
import Landing from 'Components/Landing/Landing';
import Section from 'Components/Section/Section';
import { Theme } from 'Styles/Colours';
import Habit from 'Components/Habit/Habit';
import { DualiPhone } from 'Assets/Assets';
// import { ContentContainer } from 'Styles/Containers';
import Content from 'Components/Content/Content';
import Circle from 'Components/Circle/Circle';
import { Sparkles } from 'Components/Sparkles/Sparkles';

const Home = () => {
    return (
        <Fragment>
            <Landing />
            <Section colour={Theme.light.text} background={Theme.light.card} direction='left'>
                <Content
                    img={DualiPhone}
                    alt='iPhone Screenshots'
                    heading={`Motivation is what gets you started.\nHabit is what keeps you going.`}
                    body={`A habit is persistence in practice. 
                    Forming a habit is no easy task, but Habitual is here to help!
                    Habitual helps you to focus on what truly matters. Build the best version of yourself by mastering habits that are important to you. The best time to start is now!`}
                />

                {/* <Circle gradient={Gr}/> */}
                {/* <ContentContainer> */}
                {/* <img src={DualiPhone} alt='iPhone Screenshots' /> */}
                {/* </ContentContainer> */}
                {/* <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <p>Testing</p>
                <Habit />
                <Habit />
                <Habit />
                <Habit />
                <Habit />
                <Habit />
                <Habit />
                <Habit />
                <Habit />
                <Habit />
                <Habit /> */}
            </Section>
            <Section
                colour={Theme.light.text}
                background={Theme.light.background}
                direction='right'
            />
            <Section
                colour={Theme.light.text}
                background={Theme.light.background}
                direction='right'
            />
            <Section
                colour={Theme.light.text}
                background={Theme.light.background}
                direction='right'
            />
            <Section
                colour={Theme.light.text}
                background={Theme.light.background}
                direction='right'
            />
        </Fragment>
    );
};

export default Home;
