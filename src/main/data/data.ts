import { Card } from '../interfaces/card.interfaces';
import { Props as FooterMediaProps } from '../components/footer/FooterMedia';
import { Props as NavbarLinkProps } from '../components/navbar/NavbarLink';
import brain from '../assets/brain.png';
import speed from '../assets/speed.png';
import eye from '../assets/eye.png';
import valorantLogo from "../assets/valorantLogo.png"
import rainboxLogo from "../assets/rainboxLogo.png"
import overwatchLogo from "../assets/overwatchLogo.png"
import csgoLogo from "../assets/csgoLogo.png"
import apexLogo from "../assets/apexLogo.png"
import dutyLogo from "../assets/dutyLogo.png"
import fortniteLogo from "../assets/fortniteLogo.png"

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

export const cards: Card[] = [
    {
        media: brain,
        title: 'Analytical',
        text: 'Brain exercises'
    },
    {
        media: eye,
        title: 'Reaction',
        text: 'Improve your reaction'
    },
    {
        media: speed,
        title: 'Speed',
        text: 'You will be faster'
    },
]

export const games: any[] = [
    {
        image: valorantLogo,
        name: 'Valorant',
    },
    {
        image: rainboxLogo,
        name: 'Rainbox Six',
    },
    {
        image: overwatchLogo,
        name: 'Overwatch',
    },
    {
        image: csgoLogo,
        name: 'CSGO',
    },
    {
        image: apexLogo,
        name: 'Apex',
    },
    {
        image: dutyLogo,
        name: 'Call of Duty',
    },
    {
        image: fortniteLogo,
        name: 'Fortnite',
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