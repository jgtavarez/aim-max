import { createContext, ReactElement } from 'react';
import { Card as CardInterface, CardContextProps } from '../../interfaces/card.interfaces';

export const CardContext = createContext({} as CardContextProps);
const { Provider } = CardContext;

export interface Props {
  children: ReactElement | ReactElement[];
  card: CardInterface;
  variant?: string;
  className?: string;
}

export const Card = ({ children, card, variant, className='' }: Props) => {
  if (variant === 'rectangle') {
    return (
      <Provider value={{ card, variant }}>
        <div className={`flex items-center w-full py-7 px-6 cursor-pointer text-left rounded-3xl ${className}`}>
          {children}
        </div>
      </Provider>
    )
  }

  return (
    <Provider value={{ card }}>
      <div className='bg-medium-white px-8 flex flex-col justify-center items-start cursor-pointer text-left rounded-3xl' style={{ width: '265px', height: '205px' }}>
        {children}
      </div>
    </Provider>
  )
}
