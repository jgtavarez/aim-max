import { useEffect, useState } from 'react';
import { getLeaderboard } from '../api/getLeaderboard';

interface State {
    data: any[];
    loading: boolean;
}

export const useLeaderboard = (exercise: string = '') => {

    const [state, setState] = useState<State>({
        data: [],
        loading: true
    })

    useEffect(() => {
        getLeaderboard(exercise)
            .then(resp => {
                setState({
                    data: resp,
                    loading: false
                })
            })
    }, [exercise])

    return state;

}