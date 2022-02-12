import { useContext } from 'react';
import { CardContext } from "./Card";

export const CardMedia = ({ media }: { media?: string }) => {

  const { card } = useContext(CardContext)

  return (
    <img src={card.media} className="mr-6" alt="card" />
  )
}
