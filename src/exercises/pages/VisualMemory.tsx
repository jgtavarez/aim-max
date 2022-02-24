import { ExplanationScreen } from '../components/ExplanationScreen';
import { visualMemory } from '../assets';
import { useVisualMemory } from '../hooks/useVisualMemory';
import { ResultCard } from '../components/ResultCard';

export const VisualMemory = () => {
    const { state, startGame, click, gameOptions } = useVisualMemory()

    let boxes: any[] = []
    for (let index = 0; index < 25; index++) {
        boxes.push(<div key={index} style={{flex: '1 0 17%'}} onClick={() => click(index)} className={`w-36 h-36 flex flex-col justify-center items-center cursor-pointer ${(state.memory.includes(index) && state.show && gameOptions.start) || state.found.includes(index)  ? 'box-orange flip' : 'box-green'}`}></div>)
    }

    return (
        <div className='bg-bold-blue'>
            <ExplanationScreen img={visualMemory} explanation="Click on the orange boxes once they have been turned over" onClick={startGame} />

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
