import { useState } from 'react'

interface State {
    skill: string;
    description: string;
    video: string;
}

export const useSkills = () => {

    const initialState: State = {
        skill: 'flicking',
        description: 'Learn how to master crosshair placement accuracy and speed. It takes a lot of practice to be able to place your crosshair as fast and precise as possible on your target’s head by swiping your mouse in a quick yet controlled movement.',
        video: 'https://www.youtube.com/embed/WPSC1a8xtfk'
    }

    const [state, setState] = useState<State>(initialState)

    const handleSkill = (variant: string) => {
        setState(prev => ({
            ...prev,
            skill: variant
        }));

        switch (variant) {
            case 'flicking':
                setState({
                    ...initialState
                });
                break;
            case 'tracking':
                setState(prev => ({
                    ...prev,
                    description: 'Practice following your target with accurate crosshair placement and anticipate as fast as possible any change in your target’s movement to deal as much damage in the shortest amount of time possible.',
                    video: 'https://www.youtube.com/embed/5sA6VgvUFMA'
                }));
                break;
            case 'switching':
                setState(prev => ({
                    ...prev,
                    description: 'The Academy Aim test routines include practicing to switch your crosshair between 2 targets swiftly and with mouse accuracy to neutralize multiple targets in the least amount of time.',
                    video: 'https://www.youtube.com/embed/XI5Oevaczbo'
                }));
                break;
            case 'strafe':
                setState(prev => ({
                    ...prev,
                    description: 'Strafe aim is to change movement directions whenever and only whenever the opponent you are aiming at is changing direction. Keep in mind that you have 8 possible directions.',
                    video: 'https://www.youtube.com/embed/1Q3gxNGhEag'
                }));
                break;
            default:
                setState(prev => ({
                    ...prev,
                    description: 'TStrafe aim is to change movement directions whenever and only whenever the opponent you are aiming at is changing direction. Keep in mind that you have 8 possible directions.',
                    video: 'https://www.youtube.com/embed/1Q3gxNGhEag'
                }));
        }
    }

    return {
        state,
        handleSkill
    }

}