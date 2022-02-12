import { ReactElement } from "react";

export interface FooterProps {
    children: ReactElement | ReactElement[];
}

export interface FooterMediaProps {
    icon: string;
    href: string;
}

export interface FooterHOCProps {
    ({ children }: FooterProps): JSX.Element;
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
    ({ children }: NavbarProps): JSX.Element;
    Link: ({ to, text }: NavbarLinkProps) => JSX.Element;
}

// Card
export interface CardProps {
    children: ReactElement | ReactElement[];
    card: Card;
}

export interface Card {
    media: string;
    title: string;
    text: string;
}

export interface CardContextProps {
    card: Card;
}

export interface CardHOCProps {
    ({ children }: CardProps): JSX.Element;
    Media: ({ media }: { media?: string }) => JSX.Element;
    Title: ({ title }: { title?: string }) => JSX.Element;
    Text: ({ text }: { text?: string }) => JSX.Element;
}