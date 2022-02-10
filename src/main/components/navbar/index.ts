import { Navbar as NavbarHOC } from './Navbar';
import { NavbarLink } from './NavbarLink';
import { NavbarHOCProps } from '../../interfaces/main.interfaces';

export const Navbar: NavbarHOCProps = Object.assign( NavbarHOC, {
    Link: NavbarLink,
})


export default Navbar;