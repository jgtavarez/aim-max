import { List as ListHOC } from './List';
import { ListHOCProps } from '../../interfaces/list.interfaces';
import { ListItem } from './ListItem';

export const List: ListHOCProps = Object.assign( ListHOC, {
    Item: ListItem,
})


export default List;