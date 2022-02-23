import { ExplanationScreen } from '../components/ExplanationScreen';
import { searchNumber } from '../assets';
import { useSearchNumber } from '../hooks/useSearchNumber';
import { ResultCard } from '../components/ResultCard';

export const SearchNumber = () => {
  const { state, startGame, click } = useSearchNumber()

  return (
    <div className='bg-bold-blue'>
      <ExplanationScreen img={searchNumber} explanation="Click on the appropriate number as quickly as possible" onClick={startGame} />

      <div className='h-screen flex flex-col justify-center items-center gap-8'>
        <div className='max-w-3xl'>
          <div className='bg-white flex justify-center items-center py-6'>
            <h3 className='font-bold text-5xl text-medium-blue'>{state.find}</h3>
          </div>
          <div className='flex flex-wrap'>
            {
              state.numbers.map(number => (
                <div key={number} onClick={() => click(number)} className="text-white w-60 h-60 flex justify-center items-center cursor-pointer font-bold text-7xl" style={{ border: '3px solid white', flex: '0 0 33.333333%' }}>{number}</div>
              ))
            }
          </div>
        </div>
        <ResultCard />
      </div>
    </div>
  )
}
