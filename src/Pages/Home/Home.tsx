import { Fragment } from 'react';
import Landing from 'Components/Landing/Landing';
import Section from 'Components/Section/Section';
import { Theme } from 'Styles/Colours';
import { Book, DarkMode, DualiPhone, Fruit, Piano, Run, Tracking } from 'Assets/Assets';
import Content from 'Components/Content/Content';
import Habit from 'Components/Habit/Habit';

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
                    Design your own custom habits, or use some of ours. 
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
        </Fragment>
    );
};

export default Home;
