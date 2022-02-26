import { useState } from 'react'

interface State {
    card: string;
}

export const useHome = () => {

    const initialState: State = {
        card: 'Analytical'
    }

    const [state, setState] = useState<State>(initialState)

    const handleCard = (variant: string) => {
        setState(prev => ({
            ...prev,
            card: variant
        }));
    }

    return {
        state,
        handleCard
    }

}