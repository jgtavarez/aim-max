import { createContext, ReactElement } from 'react';
import { List as ListInterface } from '../../interfaces/useGuidesGame.interface';
import { ListContextProps } from '../../interfaces/list.interfaces';

export const ListContext = createContext({} as ListContextProps);
const { Provider } = ListContext;

export interface Props {
    children: ReactElement | ReactElement[];
    list: ListInterface;
}

export const List = ({ children, list }: Props) => {
    return (
        <Provider value={{ list }}>
            <div className='mb-8'>
                <h2 className='mb-4'>{list.title}</h2>
                {children}
            </div>
        </Provider>
    )
}
