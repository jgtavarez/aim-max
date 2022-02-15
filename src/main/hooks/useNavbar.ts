import { useState } from 'react'

export const useNavbar = () => {

    const [show, setNavbar] = useState(false)

    const toggleNavbar = () => {
        setNavbar(prev => !prev)
    }

    return {
        show,
        toggleNavbar
    }

}