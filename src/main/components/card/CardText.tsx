import { useContext } from 'react';
import { CardContext } from "./Card";

export const CardText = ({ text }: { text?: string }) => {

    const { card } = useContext(CardContext)

    return (
        <p>{card.text}</p>
    )
}
