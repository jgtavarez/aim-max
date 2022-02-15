import { useContext } from 'react';
import { CardContext } from "./Card";

export interface Props {
    text?: string;
}

export const CardText = ({ text }: Props) => {

    const { card } = useContext(CardContext)

    return (
        <p>{card.text}</p>
    )
}
