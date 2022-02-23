import { ExplanationScreen } from '../components/ExplanationScreen';
import { colorText } from '../assets';
import { useColorText } from '../hooks/useColorText';
import { ResultCard } from '../components/ResultCard';

export const ColorText = () => {
    const { state, startGame, click } = useColorText()

    return (
        <div className='bg-bold-blue'>
            <ExplanationScreen img={colorText} explanation="Click as fast as possible when the text matches the text color" onClick={startGame} />

            <div className='h-screen flex flex-col justify-center items-center gap-8' onClick={click}>
                <h3 className={`bg-white text-7xl w-11/12 md:w-1/3 font-bold py-12 flex justify-center uppercase text-${state.color}`}>{state.text}</h3>
                <ResultCard />
            </div>
        </div>
    )
}
