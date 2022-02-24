import { ExplanationScreen } from '../components/ExplanationScreen';
import { targetShoot } from '../assets';
import { useTargetShoot } from '../hooks/useTargetShoot';
import { ResultCard } from '../components/ResultCard';
import { NoPhone } from '../components/NoPhone';


export const TargetShoot = () => {
  const { state, startGame, click } = useTargetShoot()

  if (window.screen.width < 1000) {
    return (
      <NoPhone />
    )
  }

  return (
    <div className='bg-bold-blue no-phone'>
      <ExplanationScreen img={targetShoot} explanation="Click on the frame as fast you can when it changes color" onClick={startGame} />

      <div className='h-screen flex flex-col justify-center items-center gap-8'>
        <div className='w-full h-full' style={{ maxWidth: '1100px', maxHeight: '700px', border: '3px solid white' }}>
          <div className='bg-light-blue w-48 h-48 cursor-pointer absolute' style={{ borderRadius: '50%', transform: `translateX(${state.x}px) translateY(${state.y}px)` }} onClick={click}></div>
        </div>
        <ResultCard />
      </div>
    </div>
  )
}
