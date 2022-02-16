import { Card as CardInterface } from '../../interfaces/card.interfaces';
import { useContext } from 'react';
import { GuidesContext } from '../../pages/Guides';
import animation from '../../animations/animation.module.css';
import '../../styles/styles.css';

export interface Props {
    card: CardInterface;
}

export const Card = ({ card }: Props) => {

    const { guide, handleGuide } = useContext(GuidesContext)

    return (
        <div onClick={() => handleGuide(card.game)} className={`cursor-pointer my-4 rounded-2xl border-2 border-medium-gray bg-center bg-cover ${animation.entrance} mini-${card.media} ${card.game === guide ? 'on border-medium-orange ml-12' : ''}`} style={{ width: '30rem', height: '15rem' }}>
        </div>
    )
}
