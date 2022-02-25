import { useContext } from 'react';
import { exercisesContext } from '../ExercisesModule';

interface Props {
    img: string;
    explanation: string;
    onClick: () => void;
}

export const ExplanationScreen = ({ img, explanation, onClick }: Props) => {
    const { gameOptions } = useContext(exercisesContext)

    return (
        <div className={`h-screen w-screen z-10 bg-medium-white absolute flex flex-col items-center justify-center ${gameOptions.start ? 'hidden' : ''}`}>
            <img src={img} alt="exercise-icon" />
            <p className="my-8 font-bold text-4xl md:text-5xl text-center text-bold-gray">{explanation}</p>
            <button className="py-4 px-8 font-bold bg-bold-gray text-white" onClick={onClick}>Ready</button>
        </div>
    )
}
