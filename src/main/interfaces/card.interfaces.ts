import { Props as CardProps } from '../components/card/Card';
import { Props as CardMediaProps } from '../components/card/CardMedia';
import { Props as CardTitleProps } from '../components/card/CardTitle';
import { Props as CardTextProps } from '../components/card/CardText';

export interface Card {
    media: string;
    title: string;
    text: string;
}

export interface CardContextProps {
    card: Card;
    variant?: string;
}

export interface CardHOCProps {
    ({ children }: CardProps): JSX.Element;
    Media: (Props: CardMediaProps) => JSX.Element;
    Title: (Props: CardTitleProps) => JSX.Element;
    Text: (Props: CardTextProps) => JSX.Element;
}