import { ExplanationScreen } from '../components/ExplanationScreen';
import { clickLimit } from '../assets';
import { useClickLimit } from '../hooks/useClickLimit';
import { ResultCard } from '../components/ResultCard';

export const ClickLimit = () => {
    const { state, startGame, click } = useClickLimit()

    return (
        <div className='bg-bold-blue'>
            <ExplanationScreen img={clickLimit} explanation="Click on the screen as many times as you can in 10 seconds" onClick={startGame} />

            <div className='h-screen flex flex-col justify-center items-center gap-8' onClick={click}>
                <div className='text-white flex items-center'>
                    <div className='flex flex-col gap-2 justify-center items-center w-60 h-60' style={{ border: '3px solid white' }}>
                        <h4 className='text-4xl font-medium'>Click</h4>
                        <h3 className='text-5xl font-bold'>{state.click}</h3>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center w-60 h-60' style={{ border: '3px solid white' }}>
                        <h4 className='text-4xl font-medium'>Time</h4>
                        <h3 className='text-5xl font-bold'>{state.time}</h3>
                    </div>
                </div>
                <ResultCard />
            </div>
        </div>
    )
}
