import { ExplanationScreen } from '../components/ExplanationScreen';
import { captureColor } from '../assets';
import { useCaptureColor } from '../hooks/useCaptureColor';
import { ResultCard } from '../components/ResultCard';

export const CaptureColor = () => {
    const { state, startGame, click } = useCaptureColor()

    return (
        <div className='bg-bold-blue'>
            <ExplanationScreen img={captureColor} explanation="Click on the green color when it appears as fast as you can" onClick={startGame} />

            <div className='h-screen flex flex-col justify-center items-center gap-8'>
                <div className='max-w-3xl'>
                    <div className='flex flex-wrap'>
                        {
                            state.numbers.map((number, index) => (
                                <div key={number} onClick={() => click(index)} className={`w-60 h-60 flex justify-center items-center cursor-pointer font-bold text-7xl ${index===state.numbers[state.correct] ? 'box-green' : ''}`} style={{ border: '3px solid white', flex: '0 0 33.333333%' }}></div>
                            ))
                        }
                    </div>
                </div>
                <ResultCard />
            </div>
        </div>
    )
}
