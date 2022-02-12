import { Card as CardHOC } from './Card';
import { CardHOCProps } from '../../interfaces/main.interfaces';
import { CardMedia } from './CardMedia';
import { CardTitle } from './CardTitle';
import { CardText } from './CardText';

export const Card: CardHOCProps = Object.assign( CardHOC, {
    Media: CardMedia,
    Title: CardTitle,
    Text: CardText,
})


export default Card;