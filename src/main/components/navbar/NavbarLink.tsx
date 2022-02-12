import { NavbarLinkProps } from '../../interfaces/main.interfaces';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { NavbarContext } from './Navbar';

export const NavbarLink = ({ to, text }: NavbarLinkProps) => {

    const { toggleNavbar } = useContext(NavbarContext)

    return (
        <li className='text-4xl' onClick={toggleNavbar}>
            <NavLink to={to}>{text}</NavLink>
        </li>
    )
}
