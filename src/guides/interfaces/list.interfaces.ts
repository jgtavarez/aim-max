import { Props as ListProps } from '../components/list/List';
import { Props as ListItemProps } from '../components/list/ListItem';
import { List as List } from './useGuidesGame.interface';

export interface ListContextProps {
    list: List;
}

export interface ListHOCProps {
    ({ children }: ListProps): JSX.Element;
    Item: (Props: ListItemProps) => JSX.Element;
}