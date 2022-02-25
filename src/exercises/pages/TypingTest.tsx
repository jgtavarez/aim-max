import { ExplanationScreen } from '../components/ExplanationScreen';
import { typingTest } from '../assets';
import { useTypingTest } from '../hooks/useTypingTest';
import { ResultCard } from '../components/ResultCard';

export const TypingTest = () => {
    const { state, startGame, enter, uptade, gameOptions } = useTypingTest()

    return (
        <div className='bg-bold-blue'>
            <ExplanationScreen img={typingTest} explanation="Write a series of words without making mistakes as fast as you can" onClick={startGame} />

            <div className='h-screen flex flex-col justify-center items-center gap-8'>
                <div className='flex items-center flex-wrap bg-white p-8 max-w-screen-xl'>
                    {
                        state.words.map((word, index) => (
                            <p key={index} className={`mx-1 font-medium text-3xl text-bold-gray ${state.incorrect.includes(index) && 'text-red-500'} ${state.correct.includes(index) && 'text-green-500'} ${index === state.attempt ? 'bg-light-gray' : ''}`}>{word}</p>
                        ))
                    }
                </div>
                <form onKeyUp={(e) => enter(e)}>
                    <input autoFocus value={state.value} disabled={gameOptions.finish} onChange={uptade}  />
                </form>
                <ResultCard />
            </div>
        </div>
    )
}
