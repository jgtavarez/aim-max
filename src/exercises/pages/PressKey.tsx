import { ExplanationScreen } from '../components/ExplanationScreen';
import { pressKey } from '../assets';
import { usePressKey } from '../hooks/usePressKey';
import { ResultCard } from '../components/ResultCard';
import { useLayoutEffect, useRef } from 'react';

export const PressKey = () => {
    const { state, startGame, click } = usePressKey()
    const div = useRef(null);

    useLayoutEffect(() => {
    }, [div])

    return (
        <div className='bg-bold-blue'>
            <ExplanationScreen img={pressKey} explanation="You must press the direction key requested on the screen" onClick={startGame} />

            <div className='h-screen flex flex-col justify-center items-center gap-8' ref={div} tabIndex={0} onKeyDown={click}>
                <h3 className={`bg-white text-7xl w-11/12 md:w-1/3 font-bold py-12 flex justify-center uppercase`}>{state.key === 37 ? 'Left' : state.key === 38 ? 'Up' : state.key === 39 ? 'Right' : state.key === 40 ? 'Down' : "NaN"}</h3>
                <ResultCard />
            </div>
        </div>
    )
}
