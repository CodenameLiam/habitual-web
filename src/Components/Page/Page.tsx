import React, { FC, Fragment, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';

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
            {children}
        </Fragment>
    );
};

export default Page;
