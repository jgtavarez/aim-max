import { flicking, switching, strafe } from '../assets'

export const SkillCard = ({ variant }: { variant: string }) => {
    let img: string;

    switch (variant) {
        case 'flicking':
            img = flicking;
            break;
        case 'switching':
            img = switching;
            break;
        case 'strafe':
            img = strafe;
            break;
        default:
            img = strafe;
    }

    return (
        <div className='w-96 h-80 bg-bold-blue flex flex-col justify-evenly items-center border-t-8 border-light-blue'>
            <h1 className='text-white text-3xl font-bold uppercase'>{variant}</h1>
            <img src={img} alt="skill" />
        </div>
    )
}
