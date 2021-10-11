import React, { FC, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { Footer } from './Page.styles';

interface PageProps {
    title: string;
}

const Page: FC<PageProps> = ({ title, children }) => {
    useEffect(() => {
        document.title = `Habitual | ${title}`;
    }, [title]);

    return (
        <Fragment>
            <Navigation />
            <main>{children}</main>
            <Footer>
                <Link to='/privacy-policy'>Privacy Policty</Link>
            </Footer>
        </Fragment>
    );
};

export default Page;
