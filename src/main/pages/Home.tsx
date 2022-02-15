import hero from "../assets/hero.png";
import { cards, games } from '../data/data';
import { Card } from "../components/card";

import a from '../assets/abilities.png'

export const Home = () => {
  return (
    <>
      <div className="bg-medium-blue">
        <div className="container mx-auto lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
          <img src={hero} alt="hero" className="w-full lg:w-auto" />
          <div className="text-center mx-auto max-w-xl py-14 lg:text-left lg:py-0 lg:mx-0">
            <h1 className="text-white font-bold text-4xl lg:text-6xl">TRAIN YOUR SHOOTING SKILLS</h1>
            <p className="text-medium-gray my-6 lg:my-10">Master your aim in videogames through brain games and cognitive tests.</p>
            <button className="bg-light-blue text-medium-blue py-5 px-7 font-bold lg:text-3xl lg:py-6 lg:px-8">LET'S START</button>
          </div>
        </div>
      </div>

      <div className="bg-bold-blue">
        <div className="container mx-auto flex gap-11 justify-between items-center overflow-x-auto px-14 py-7">
          {
            games.map(({ image, name }) => (
              <>
                <img key={name} src={image} className="hover:brightness-200" alt="game" style={{transition: "0.7s ease"}} />
                <div className="md:border-l-2 md:h-36 md:border-white"></div>
              </>
            ))
          }
        </div>
      </div>

      <div className="bg-light-gray p-4 md:p-6">
        <div className="container mx-auto flex flex-col justify-center py-14 text-center gap-10 md:py-20 md:flex-row md:text-left md:justify-between md:items-center">
          <div>
            <div>
              <h3 className="text-medium-blue text-4xl font-bold lg:text-5xl">16 DIFFERENT EXERCISES</h3>
              <p className="my-6">We have 16 different exercises by which you can exercise 3 important parts of the brain.</p>
            </div>
            <div className="flex flex-col gap-8">
              {
                cards.map(card => (
                  <Card key={card.title} card={card}>
                    <Card.Media />
                    <div>
                      <Card.Title />
                      <Card.Text />
                    </div>
                  </Card>
                ))
              }
            </div>
          </div>
          <img src={a} className="md:w-6/12 lg:w-auto" alt="" />
        </div>
      </div>
    </>
  );
};


