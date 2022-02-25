import { ExplanationScreen } from '../components/ExplanationScreen';
import { longestLine } from '../assets';
import { useLongestLine } from '../hooks/useLongestLine';
import { ResultCard } from '../components/ResultCard';

export const LongestLine = () => {
    const { state, startGame, click } = useLongestLine()

    return (
        <div className='bg-bold-blue'>
            <ExplanationScreen img={longestLine} explanation="Find and click on the longest line as quickly as possible" onClick={startGame} />

            <div className='h-screen flex flex-col justify-center items-center gap-8'>
                <div className='flex flex-row items-end gap-12'>
                    {
                        state.lines.map(line => (
                            <hr key={line} onClick={() => click(line)} className={`text-white cursor-pointer bg-white w-16 ${line === 1 ? 'h-60' : line === 2 ? 'h-64' : line === 3 ? 'h-72' : line === 4 ? 'h-80' : line === 5 ? 'h-96' : ''  }`} />
                        ))
                    }
                </div>

                <ResultCard />
            </div>
        </div>
    )
}
