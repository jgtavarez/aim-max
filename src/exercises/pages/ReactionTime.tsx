import { createContext } from 'react';
import { ExplanationScreen } from '../components/ExplanationScreen';
import { reactionTime } from '../assets';
import { useReactionTime } from '../hooks/useReactionTime';
import { ResultCard } from '../components/ResultCard';

export const gameContext = createContext({} as any);
const { Provider } = gameContext;

export const ReactionTime = () => {
  const { gameOptions, startGame, click } = useReactionTime()

  return (
    <Provider value={{ gameOptions, startGame }}>
      <div className=''>
        <ExplanationScreen img={reactionTime} explanation="Click on the frame as fast you can when it changes color" />

        <div className={`h-screen flex flex-col justify-center items-center ${gameOptions.green ? 'bg-green-500' : 'bg-red-500'}`} onClick={click}>
          <ResultCard />
        </div>
      </div>
    </Provider>
  )
}
