import { ExplanationScreen } from '../components/ExplanationScreen';
import { reactionTime } from '../assets';
import { useReactionTime } from '../hooks/useReactionTime';
import { ResultCard } from '../components/ResultCard';

export const ReactionTime = () => {
  const { state, startGame, click } = useReactionTime()

  return (
    <div className=''>
      <ExplanationScreen img={reactionTime} explanation="Click on the frame as fast you can when it changes color" onClick={startGame} />

      <div className={`h-screen flex flex-col justify-center items-center ${state.green ? 'bg-green-500' : 'bg-red-500'}`} onClick={click}>
        <ResultCard />
      </div>
    </div>
  )
}
