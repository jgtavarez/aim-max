import { createContext } from 'react';
import { CardProps, CardContextProps } from '../../interfaces/main.interfaces';

export const CardContext = createContext({} as CardContextProps);
const { Provider } = CardContext;

export const Card = ({ children, card }: CardProps) => {
  return (
    <Provider value={{card}}>
      <div className='flex items-center w-full py-7 px-6 cursor-pointer text-left rounded-3xl'>
        {children}
      </div>
    </Provider>
  )
}
