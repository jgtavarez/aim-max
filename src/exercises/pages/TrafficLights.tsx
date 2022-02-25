import { ExplanationScreen } from '../components/ExplanationScreen';
import { trafficLights } from '../assets';
import { useTrafficLights } from '../hooks/useTrafficLights';
import { ResultCard } from '../components/ResultCard';

export const TrafficLights = () => {
    const { state, startGame, click } = useTrafficLights()

    let circles: any[] = []
    for (let index = 0; index < 8; index++) {
        circles.push(<div key={index} className={`w-28 h-28 border-2 border-white ${state.lightIndex===4 && index>=4 ? 'box-green' : ''} ${index>=state.lightIndex && index<4 ? 'box-red' : ''}`} style={{ borderRadius: '50%', flex: '1 0 18%' }}></div>)
    }

    return (
        <div className='bg-bold-blue'>
            <ExplanationScreen img={trafficLights} explanation="Click as fast as the red lights turn off and the green lights turn on" onClick={startGame} />

            <div className='h-screen flex flex-col justify-center items-center gap-8' onClick={click}>
                <div className='max-w-2xl flex flex-wrap border-2 border-white p-8 gap-8'>
                    {circles}
                </div>
                <ResultCard />
            </div>
        </div>
    )
}
