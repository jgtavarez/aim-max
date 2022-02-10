import { ReactElement } from "react";

export interface FooterProps {
    children: ReactElement | ReactElement[];
}

export interface FooterMediaProps {
    icon: string;
    href: string;
}

export interface FooterHOCProps {
    ({ children }: FooterProps ):JSX.Element;
    Media: ({ icon, href }: FooterMediaProps) => JSX.Element;
}

// Navbar
export interface NavbarProps {
    children: ReactElement | ReactElement[];
}

export interface NavbarLinkProps {
    to: string;
    text: string;
}

export interface NavbarHOCProps {
    ({ children }: NavbarProps ):JSX.Element;
    Link: ({ to, text }: NavbarLinkProps) => JSX.Element;
}