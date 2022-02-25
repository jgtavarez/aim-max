import { cardsExercises } from '../data/data';
import { Card } from '../components/card';
import exercisesBanner from '../assets/exercisesBanner.png';
import { NavLink } from 'react-router-dom';

export const Exercises = () => {
  return (
    <>
      <div className="bg-medium-blue py-12 px-5 md:py-16">
        <div className='container mx-auto flex flex-col gap-7 lg:flex-row lg:justify-between lg:items-center'>
          <div className='lg:max-w-screen-sm'>
            <h2 className="text-white font-bold text-4xl lg:text-6xl">IT’S TIME TO PRACTICE</h2>
            <p className="text-medium-gray mt-6 lg:mt-10">Logical and cognitive skills are strongly related to individual performance in shooting games, since in these types of games you need a great analytical capacity, speed and reaction. With us you will practice and improve those skills and then be the best in your game.
            </p>
          </div>
          <img src={exercisesBanner} alt="exercise-banner" />
        </div>
      </div>
      <div className='bg-light-gray py-14 px-5 md:py-16'>
        <div className='container mx-auto'>
          <h3 className='text-medium-blue font-bold text-3xl mb-10'>List of Exercises:</h3>
          <div className='flex justify-center items-center flex-wrap gap-4 lg:gap-10 lg:mx-24'>
            {
              cardsExercises.map(card => (
                <NavLink key={card.title} to={card.to}>
                  <Card card={card} >
                    <Card.Media />
                    <Card.Title />
                    <Card.Text />
                  </Card>
                </NavLink>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};
