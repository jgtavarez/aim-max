import { ExplanationScreen } from '../components/ExplanationScreen';
import { schulteTable } from '../assets';
import { useSchulteTable } from '../hooks/useSchulteTable';
import { ResultCard } from '../components/ResultCard';

export const SchulteTable = () => {
    const { state, startGame, click } = useSchulteTable()

    return (
        <div className='bg-bold-blue'>
            <ExplanationScreen img={schulteTable} explanation="Find the two down arrows and order them as quickly as possible" onClick={startGame} />

            <div className='h-screen flex flex-col justify-center items-center gap-8'>
                <div className='max-w-5xl'>
                    <div className='bg-white flex justify-center items-center py-6'>
                        <h3 className='font-bold text-5xl text-bold-blue'>{state.find}</h3>
                    </div>
                    <div className='flex flex-wrap'>
                        {
                            state.numbers.map(number => (
                                <div key={number} onClick={() => click(number)} className="text-white w-60 h-60 flex justify-center items-center cursor-pointer font-bold text-7xl" style={{ border: '3px solid white', flex: '1 0 21%' }}>{number}</div>
                            ))
                        }
                    </div>
                </div>
                <ResultCard />
            </div>
        </div>
    )
}
