import { useContext } from 'react';
import { CardContext } from "./Card";

export interface Props {
    title?: string;
}

export const CardTitle = ({ title }: Props) => {

    const { card, variant } = useContext(CardContext)

    return (
        <h4 className={`font-bold text-medium-blue ${variant==='rectangle' ? 'text-4xl my-0' : 'text-3xl my-4'}`}>{card.title}</h4>
    )
}
