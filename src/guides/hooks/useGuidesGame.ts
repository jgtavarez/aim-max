import { useEffect, useState } from 'react';
import { getGuideByGame } from '../api/getGuideByGame';
import { State } from '../interfaces/useGuidesGame.interface';

export const useGuidesGame = (game: string = '') => {

    const [state, setState] = useState<State>({
        data: {},
        loading: true
    })

    useEffect(() => {
        getGuideByGame(game)
            .then(resp => {
                setState({
                    data: resp,
                    loading: false
                })
            })
    }, [game])

    return state;

}