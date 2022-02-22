import { gameContext } from '../pages/ReactionTime';
import { useContext } from 'react';

interface Props {
    img: string;
    explanation: string;
}

export const ExplanationScreen = ({ img, explanation }: Props) => {
    const { gameOptions, startGame } = useContext(gameContext)

    return (
        <div className={`h-screen w-screen z-10 bg-medium-white absolute flex flex-col items-center justify-center ${gameOptions.start ? 'hidden' : ''}`}>
            <img src={img} alt="exercise-icon" />
            <p className="my-8 font-bold text-4xl md:text-5xl text-center text-bold-gray">{explanation}</p>
            <button className="p-2 bg-gray-200" onClick={startGame}>Ready</button>
        </div>
    )
}
