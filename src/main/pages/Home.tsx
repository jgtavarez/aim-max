import hero from "../assets/hero.png";
import { cards, games } from '../MainComponent';
import { Card } from "../components/card";

export const Home = () => {
  return (
    <>
      <div className="bg-medium-blue">
        <div className="container mx-auto">
          <img src={hero} alt="hero" />
          <div className="text-center mx-auto max-w-xl py-14">
            <h1 className="text-white font-bold text-4xl">TRAIN YOUR SHOOTING SKILLS</h1>
            <p className="text-medium-gray my-6">Master your aim in videogames through brain games and cognitive tests.</p>
            <button className="bg-light-blue text-medium-blue py-5 px-7 font-bold">LET'S START</button>
          </div>
        </div>
      </div>

      <div className="bg-bold-blue">
        <div className="container mx-auto flex gap-11 justify-between items-center overflow-x-auto px-14 py-7">
          {
            games.map(({ image, name }) => (
              <>
                <img key={name} src={image} alt="game" />
                <div className="md:border-l-2 md:h-36 md:border-white"></div>
              </>
            ))
          }
        </div>
      </div>

      <div>
        <div className="container mx-auto py-14 text-center">
          <div>
            <h3 className="text-bold-blue text-4xl font-bold">16 DIFFERENT EXERCISES</h3>
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
      </div>
    </>
  );
};


