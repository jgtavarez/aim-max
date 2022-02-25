import { ExplanationScreen } from '../components/ExplanationScreen';
import { findImpostor, arrowUp, arrowDown } from '../assets';
import { useFindImpostor } from '../hooks/useFindImpostor';
import { ResultCard } from '../components/ResultCard';

export const FindImpostor = () => {
  const { state, startGame, click } = useFindImpostor()

  let boxes: any[] = []
  for (let index = 0; index < 16; index++) {
    boxes.push(<div key={index} onClick={() => click(index)} className='w-40 h-40 flex flex-col justify-center items-center border-2 border-white cursor-pointer text-white'>{state.impostors.includes(index) ? <img src={arrowDown} alt="arrow-up" /> : <img src={arrowUp} alt="arrow-down" />}</div>)
  }

  return (
    <div className='bg-bold-blue'>
      <ExplanationScreen img={findImpostor} explanation="Find the two down arrows and order them as quickly as possible" onClick={startGame} />

      <div className='h-screen flex flex-col justify-center items-center gap-8'>
        <div className='max-w-3xl'>
          <div className='flex flex-wrap gap-4'>
            {boxes}
          </div>
        </div>
        <ResultCard />
      </div>
    </div>
  )
}
