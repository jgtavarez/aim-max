import { NavLink } from 'react-router-dom';
import { createContext } from 'react';
import { Card } from '../components/card/Card';
import { cards } from '../data/data';
import { useGuides } from '../hooks/useGuides';
import '../styles/styles.css';

interface GuidesContextProps {
  guide: string;
  handleGuide: (game: string) => void;
}

export const GuidesContext = createContext({} as GuidesContextProps);
const { Provider } = GuidesContext;

export const Guides = () => {

  const { guide, handleGuide } = useGuides();

  return (
    <Provider value={{ guide, handleGuide }}>
      <div className={`h-screen bg-cover overflow-y-hidden flex flex-col justify-center bg-${guide}`} >

        <div className="flex flex-row justify-between items-center">

          <div className="absolute top-0 left-0 cursor-pointer z-10 mt-10 ml-16">
            <NavLink to="/home"><img src='./back.png' alt='back-icon' /></NavLink>
          </div>

          <div className="z-10">
            <p className="text-medium-gray text-3xl font-medium mt-6 mb-6 ml-16 md:mt-0">Select your game</p>

            <div className="ml-16 overflow-hidden overflow-y-scroll hidden-scroll" style={{ width: '350px', height: '650px' }}>
              {
                cards.map(card => (
                  <Card key={card.game} card={card} />
                ))
              }
            </div>

          </div>

          <div className='hidden md:block mr-16'>
            <h3 className='text-white text-right font-bold text-7xl uppercase'><span className='text-medium-orange'>GET BETTER</span><br /> AT {guide}</h3>
            <p className='text-white text-right mt-7 mb-11'>with our tips you will learn <br /> what is necessary to <span className='text-medium-orange'>master the game</span></p>
            <NavLink to={guide}>
              <button className='text-white bg-medium-orange rounded-2xl py-4 px-12 font-bold text-4xl float-right'>LEARN</button>
            </NavLink>
          </div>

        </div>

        <div className='h-screen w-screen md:w-100 absolute left-0 top-0' style={{ background: 'rgba(28,22,70,0.8)'}}></div>

      </div>
    </Provider>
  )
}
