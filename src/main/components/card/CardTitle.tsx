import { useContext } from 'react';
import { CardContext } from "./Card";

export interface Props {
    title?: string;
}

export const CardTitle = ({ title }: Props) => {

    const { card } = useContext(CardContext)

    return (
        <h4 className='font-bold text-4xl'>{card.title}</h4>
    )
}
