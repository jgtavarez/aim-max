import { useContext } from 'react';
import { CardContext } from "./Card";

export interface Props {
  media?: string;
}

export const CardMedia = ({ media }: Props) => {

  const { card } = useContext(CardContext)

  return (
    <img src={card.media} className="mr-6" alt="card" />
  )
}
