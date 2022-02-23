import { ExplanationScreen } from '../components/ExplanationScreen';
import { shapeChange } from '../assets';
import { useShapeChange } from '../hooks/useShapeChange';
import { ResultCard } from '../components/ResultCard';

export const ShapeChange = () => {
    const { state, startGame, click } = useShapeChange()

    return (
        <div className='bg-bold-blue'>
            <ExplanationScreen img={shapeChange} explanation="Click as soon as you can when the shapes are the same" onClick={startGame} />

            <div className='h-screen flex flex-col justify-center items-center gap-8' onClick={click}>
                <div className='flex gap-20'>
                    <div className={`w-96 h-96 bg-cover ${state.static}`}></div>
                    <div className={`w-96 h-96 bg-cover ${state.dynamic}`}></div>
                </div>
                <ResultCard />
            </div>
        </div>
    )
}
