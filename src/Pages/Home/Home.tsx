import { Fragment } from 'react';
import Landing from 'Components/Landing/Landing';
import Section from 'Components/Section/Section';
import { Theme } from 'Styles/Colours';
import {
    AppStore,
    Book,
    DarkMode,
    DualiPhone,
    Fruit,
    GooglePlay,
    LevitatingPhone,
    Piano,
    Run,
    Tracking,
} from 'Assets/Assets';
import Content from 'Components/Content/Content';
import Habit from 'Components/Habit/Habit';
import * as Styles from 'Components/Landing/Landing.styles';
import Reveal from 'react-awesome-reveal';
import { fadeUp } from 'Styles/Animations';

const Home = () => {
    return (
        <Fragment>
            <Landing />
            <Section colour={Theme.light.text} background={Theme.light.card} direction='left'>
                <Content
                    img={DualiPhone}
                    alt='iPhone Screenshots'
                    heading={`Motivation is what gets you started.
                    Habit is what keeps you going.`}
                    body={`A habit is persistence in practice. 
                    Forming a habit is no easy task, but Habitual is here to help!
                    Habitual helps you to focus on what truly matters. 
                    Build the best version of yourself by mastering habits that are important to you.`}
                />
            </Section>
            <Section
                colour={Theme.light.text}
                background={Theme.light.background}
                direction='right'>
                <Content
                    heading='Complete habits.'
                    body={`Easily create and cultivate new habits with Habitual. 
                    Find value in your new routine. The best time to start is now!`}>
                    <Habit icon={Run} gradient='AQUA' text='Go for a run' />
                    <Habit icon={Piano} gradient='ORANGE' text='Practice the piano' />
                    <Habit icon={Book} gradient='TANGERINE' text='Read a book' />
                    <Habit icon={Fruit} gradient='MIDNIGHT' text='Eat fruit & vege' />
                </Content>
            </Section>
            <Section colour={Theme.light.text} background={Theme.light.card} direction='left'>
                <Content
                    img={Tracking}
                    alt='Tracking Screenshots'
                    heading={`Track your progress.`}
                    body={`Habitual helps you to stay accountable. View your history to make sure your building habits. 
                    Challenge yourself with stats and streaks. You can do it!`}
                />
            </Section>
            <Section colour={Theme.dark.text} background={Theme.dark.background} direction='right'>
                <Content
                    img={DarkMode}
                    alt='Dark Mode Screenshots'
                    heading={`Join the dark side.`}
                    body={`Habitual is also available in dark mode, which is pretty neat.`}
                />
            </Section>
            <Section colour={Theme.light.text} background={Theme.light.background} direction='left'>
                <Content
                    img={LevitatingPhone}
                    alt='Levitating Screenshots'
                    heading={`Be Inspired.`}
                    body={`Design your own habits, or select from one of ours.
                    There is always opportunity for inspiration when building great habits!`}
                />
            </Section>
            <Section colour={Theme.light.text} background={Theme.light.card} direction='right'>
                <Styles.DownloadContainer>
                    <Reveal keyframes={fadeUp} triggerOnce duration={1000}>
                        <Styles.SubTitleColour>Download Today</Styles.SubTitleColour>
                    </Reveal>
                    <Reveal keyframes={fadeUp} triggerOnce duration={1000}>
                        <Styles.LinkContainer>
                            <Styles.LinkButton
                                aria-label='App Store Link'
                                onClick={() => window.open('https://liampercy.com')}>
                                <Styles.LinkImage src={AppStore} alt='App Store' />
                            </Styles.LinkButton>
                            <Styles.LinkButton
                                aria-label='Google Play Store Link'
                                onClick={() => window.open('https://liampercy.com')}>
                                <Styles.LinkImage src={GooglePlay} alt='Google Play Store' />
                            </Styles.LinkButton>
                        </Styles.LinkContainer>
                    </Reveal>
                </Styles.DownloadContainer>
            </Section>
        </Fragment>
    );
};

export default Home;
