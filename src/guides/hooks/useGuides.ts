import { useState } from 'react';

export const useGuides = () => {

    const [guide, setGuide] = useState('valorant')

    const handleGuide = (game: string) => {
        setGuide(game)
    }

    return {
        guide,
        handleGuide
    }

}