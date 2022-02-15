import { createContext, ReactElement } from 'react';
import { Card as CardInterface, CardContextProps } from '../../interfaces/card.interfaces';

export const CardContext = createContext({} as CardContextProps);
const { Provider } = CardContext;

export interface Props {
  children: ReactElement | ReactElement[];
  card: CardInterface;
}

export const Card = ({ children, card }: Props) => {
  return (
    <Provider value={{card}}>
      <div className='flex items-center w-full py-7 px-6 cursor-pointer text-left rounded-3xl'>
        {children}
      </div>
    </Provider>
  )
}
