import { Props as NavbarLinkProps } from '../../shared/components/navbar/NavbarLink';
import { Props as FooterMediaProps } from '../../shared/components/footer/FooterMedia';

export const links: NavbarLinkProps[] = [
    {
        to: '/home',
        text: 'Home',
    },
    {
        to: '/exercises',
        text: 'Exercises',
    },
    {
        to: '/leaderboard',
        text: 'Leaderboard',
    },
    {
        to: '/skills',
        text: 'Skills',
    },
    {
        to: '/guides',
        text: 'Guides',
    },
]

export const medias: FooterMediaProps[] = [
    {
        icon: '/twitter.png',
        href: '/',
    },
    {
        icon: '/facebook.png',
        href: '/',
    },
    {
        icon: '/youtube.png',
        href: '/',
    },
    {
        icon: '/git.png',
        href: 'https://github.com/jgtavarez/aim-max',
    },
]