import { useContext } from 'react';
import { exercisesContext } from '../ExercisesModule';

export const ResultCard = () => {
    const { gameOptions } = useContext(exercisesContext)

    return (
        <div className={`flex flex-col justify-center items-center ${gameOptions.finish ? '' : 'hidden'}`}>
            <h2 className='text-white text-6xl font-bold'>{gameOptions.score} ms</h2>
            <p className="text-white mb-6 mt-4">{gameOptions.feedback}</p>
            <div className='flex items-center gap-6'>
                <button className="p-2 bg-white" onClick={() => window.location.reload()}>Try Again</button>
                <button className="p-2 bg-white">Save Score</button>
            </div>
        </div>
    )
}
