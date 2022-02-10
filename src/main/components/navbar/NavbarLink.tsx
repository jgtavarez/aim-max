import { NavbarLinkProps } from '../../interfaces/main.interfaces';
import { NavLink } from 'react-router-dom';

export const NavbarLink = ({ to, text }: NavbarLinkProps) => {
    return (
        <li>
            <NavLink to={to}>{text}</NavLink>
        </li>
    )
}
