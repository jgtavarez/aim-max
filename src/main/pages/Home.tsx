import hero from "../assets/hero.png";

import game1 from "../assets/game1.png"
import game2 from "../assets/game2.png"
import game3 from "../assets/game3.png"
import game4 from "../assets/game4.png"
import game5 from "../assets/game5.png"
import game6 from "../assets/game6.png"
import game7 from "../assets/game7.png"

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
        <div className="container mx-auto">

        </div>
      </div>
    </>
  );
};


