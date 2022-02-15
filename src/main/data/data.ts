import { Card } from '../interfaces/card.interfaces';
import { Props as FooterMediaProps } from '../components/footer/FooterMedia';
import { Props as NavbarLinkProps } from '../components/navbar/NavbarLink';
import { valorantLogo, rainboxLogo, overwatchLogo, csgoLogo, apexLogo, dutyLogo, fortniteLogo, brain, eye, speed, reactionTime, searchNumber, findImpostor, searchColor, colorText, captureColor, shapeChange, soundReaction, schulteTable, visualMemory, trafficLghts, pressKey, targetShoot, longestLine, clickLimit, typingTest } from '../assets';

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

export const cardsExercises: Card[] = [
    {
        media: reactionTime,
        title: 'Reaction Time',
        text: 'React as soon as possible to the color change'
    },
    {
        media: searchNumber,
        title: 'Search Number',
        text: 'According to the representation of the text'
    },
    {
        media: findImpostor,
        title: 'Find Impostor',
        text: 'Remove the boxes that do not match the others'
    },
    {
        media: searchColor,
        title: 'Search Color',
        text: 'According to the representation of the text'
    },
    {
        media: colorText,
        title: 'Color Text',
        text: 'Reaction when color matching text'
    },
    {
        media: captureColor,
        title: 'Capture Color',
        text: 'Capture the green color on the board'
    },
    {
        media: shapeChange,
        title: 'Shape Change',
        text: 'React to shape change when they are the same'
    },
    {
        media: soundReaction,
        title: 'Sound Reaction',
        text: 'React as fast as you can to the sound'
    },
    {
        media: schulteTable,
        title: 'Schulte Table',
        text: 'Find the numbers in numerical order'
    },
    {
        media: visualMemory,
        title: 'Visual Memory',
        text: 'Memorize and click the orange boxes'
    },
    {
        media: trafficLghts,
        title: 'Traffic Lghts',
        text: 'React when the traffic light is green'
    },
    {
        media: pressKey,
        title: 'Press Key',
        text: 'Press the key in the correct direction'
    },
    {
        media: targetShoot,
        title: 'Target Shoot',
        text: 'React as soon as possible to the color change'
    },
    {
        media: longestLine,
        title: 'Longest Line',
        text: 'Find and click on the longest line'
    },
    {
        media: clickLimit,
        title: 'Click Limit',
        text: 'Reach the maximum number of clicks'
    },
    {
        media: typingTest,
        title: 'Typing Test',
        text: 'Write a series of words as fast as you can'
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