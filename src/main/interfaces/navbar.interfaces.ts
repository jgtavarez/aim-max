import { Props as NavbarProps } from '../components/navbar/Navbar';
import { Props as NavbarLinkProps } from '../components/navbar/NavbarLink';

export interface NavbarContextProps {
    show: boolean;
    toggleNavbar: () => void;
}

export interface NavbarHOCProps {
    ({ children }: NavbarProps): JSX.Element;
    Link: ({ to, text }: NavbarLinkProps) => JSX.Element;
}
