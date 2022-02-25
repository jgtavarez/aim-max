import { ExplanationScreen } from '../components/ExplanationScreen';
import { soundReaction } from '../assets';
import { useSoundReaction } from '../hooks/useSoundReaction';
import { ResultCard } from '../components/ResultCard';

export const SoundReaction = () => {
    const { startGame, click } = useSoundReaction()

    return (
        <div className='bg-bold-blue'>
            <ExplanationScreen img={soundReaction} explanation="Click as soon as you hear the sound as fast as you can" onClick={startGame} />

            <div className="h-screen flex flex-col justify-center items-center" onClick={click}>
                <ResultCard />
            </div>
        </div>
    )
}
