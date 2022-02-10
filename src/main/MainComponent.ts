import { NavbarLinkProps, FooterMediaProps } from './interfaces/main.interfaces';

export const links: NavbarLinkProps[] = [
    {
        to: 'home',
        text: 'Home',
    },
    {
        to: 'exercises',
        text: 'Exercises',
    },
    {
        to: 'leaderboard',
        text: 'Leaderboard',
    },
    {
        to: 'skills',
        text: 'Skills',
    },
]

export const medias: FooterMediaProps[] = [
    {
        icon: './twitter.png',
        href: '/',
    },
    {
        icon: './facebook.png',
        href: '/',
    },
    {
        icon: './youtube.png',
        href: '/',
    },
    {
        icon: './git.png',
        href: 'https://github.com/JuanGabriel2960/aim-max',
    },
]