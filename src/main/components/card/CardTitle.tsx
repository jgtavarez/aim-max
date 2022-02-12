import { useContext } from 'react';
import { CardContext } from "./Card";

export const CardTitle = ({ title }: { title?: string }) => {

    const { card } = useContext(CardContext)

    return (
        <h4 className='font-bold text-4xl'>{card.title}</h4>
    )
}
