import { useContext, useState } from 'react';
import { exercisesContext } from '../ExercisesModule';

export const SaveScore = () => {
    const { gameOptions, closeSaveScore, handlesaveScoreSuccessful } = useContext(exercisesContext);
    const [username, setUsername] = useState('')

    const postScore = async (exercise: string, username: string, score: number) => {
        handlesaveScoreSuccessful(true)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                exercise,
                username,
                score
            })
        };
        fetch('https://aim-max-backend.herokuapp.com/api/leaderboards', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                if (!response.ok) {
                    handlesaveScoreSuccessful(false)
                }
            })
            .catch(error => {
                handlesaveScoreSuccessful(false)
            });
    }

    return (
        <div className={`overlay ${gameOptions.saveScore && 'active'}`}>
            <div className={`modal w-full md:w-124 py-8 px-10 rounded-3xl bg-white ${gameOptions.saveScore && 'active'}`}>
                <h1 className="text-3xl font-bold text-medium-blue">Save Score</h1>
                <input className="border border-medium-gray w-full p-2 rounded-xl mb-8 my-1" placeholder="Username" value={username} onInput={(e: any) => setUsername(e.target.value)} />
                <div className="flex gap-6 justify-end w-full">
                    <button className="bg-medium-blue rounded-xl text-white py-3 px-5" onClick={closeSaveScore}>Cancel</button>
                    <button className={`bg-medium-blue rounded-xl text-white py-3 px-8 ${username == '' && 'bg-gray-400 cursor-not-allowed'}`} disabled={username == ''} onClick={() => { postScore(gameOptions.exercise, username, gameOptions.score); closeSaveScore() }}>Save</button>
                </div>
            </div>
        </div>
    )
}
