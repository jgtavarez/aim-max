import { ExplanationScreen } from '../components/ExplanationScreen';
import { searchColor } from '../assets';
import { useSearchColor } from '../hooks/useSearchColor';
import { ResultCard } from '../components/ResultCard';

export const SearchColor = () => {
    const { state, startGame, click } = useSearchColor()

    return (
        <div className='bg-bold-blue'>
            <ExplanationScreen img={searchColor} explanation="Click on the appropriate color as quickly as possible" onClick={startGame} />

            <div className='h-screen flex flex-col justify-center items-center gap-8'>
                <div className='max-w-3xl'>
                    <div className='bg-white flex justify-center items-center py-6'>
                        <h3 className='font-bold text-5xl text-bold-blue uppercase'>{state.find}</h3>
                    </div>
                    <div className='flex flex-wrap'>
                        {
                            state.colors.map(color => (
                                <div key={color} onClick={() => click(color)} className={`text-white w-60 h-60 flex justify-center items-center cursor-pointer font-bold text-7xl box-${color}`} style={{ border: '3px solid white', flex: '0 0 33.333333%' }}></div>
                            ))
                        }
                    </div>
                </div>
                <ResultCard />
            </div>
        </div>
    )
}
