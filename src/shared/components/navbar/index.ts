import { Navbar as NavbarHOC } from './Navbar';
import { NavbarHOCProps } from '../../interfaces/navbar.interfaces';
import { NavbarLink } from './NavbarLink';

export const Navbar: NavbarHOCProps = Object.assign( NavbarHOC, {
    Link: NavbarLink,
})


export default Navbar;