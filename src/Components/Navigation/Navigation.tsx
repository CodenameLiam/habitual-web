import { Cross } from 'hamburger-react';
import { useEffect } from 'react';
import { FC, useState } from 'react';
import { GreyColours } from 'Styles/Colours';
import * as Styles from './Navigation.styles';

const Navigation: FC = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'visible';
    }, [open]);

    return (
        <Styles.Section id='menu'>
            <Styles.Button id='menu-button' open={open}>
                <Cross
                    aria-label='Open menu'
                    rounded
                    toggled={open}
                    toggle={setOpen}
                    color={open ? GreyColours.GREY0 : GreyColours.GREY3}
                    size={26}
                />
            </Styles.Button>
            <Styles.Background id='menu-background' open={open} />

            <Styles.Container open={open}>
                <Styles.Content id='navigation' open={open}>
                    <Styles.List>
                        <Styles.NavItem delay='0.1s'>
                            <Styles.NavLink to='/'>Home</Styles.NavLink>
                        </Styles.NavItem>
                        <Styles.NavItem delay='0.2s'>
                            <Styles.NavLink to='/request'>Request</Styles.NavLink>
                        </Styles.NavItem>
                        <Styles.NavItem delay='0.3s'>
                            <Styles.NavLink to='/'>Contact</Styles.NavLink>
                        </Styles.NavItem>
                        <Styles.NavItem delay='0.4s'>
                            <Styles.NavLink to='/'>Sign In</Styles.NavLink>
                        </Styles.NavItem>
                    </Styles.List>
                </Styles.Content>
            </Styles.Container>
        </Styles.Section>
    );
};

export default Navigation;
