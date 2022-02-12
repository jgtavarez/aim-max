import { NavbarLinkProps } from '../../interfaces/main.interfaces';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { NavbarContext } from './Navbar';

export const NavbarLink = ({ to, text }: NavbarLinkProps) => {

    const { toggleNavbar } = useContext(NavbarContext)

    return (
        <li className='text-4xl lg:text-3xl lg:font-bold' onClick={toggleNavbar}>
            <NavLink to={to} className={({ isActive }) => isActive ? 'text-light-blue' : ''}>{text}</NavLink>
        </li>
    )
}
