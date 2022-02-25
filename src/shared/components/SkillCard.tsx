import { flicking, tracking, switching, strafe } from '../assets'

interface Props{
    variant: string;
    className?: string;
}

export const SkillCard = ({ variant, className='' }: Props) => {
    let img: string;

    switch (variant) {
        case 'flicking':
            img = flicking;
            break;
        case 'tracking':
            img = tracking;
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
        <div className={`cursor-pointer w-96 h-80 bg-bold-blue flex flex-col justify-evenly items-center border-t-8 border-light-blue ${className}`}>
            <h1 className='text-white text-3xl font-bold uppercase'>{variant}</h1>
            <img src={img} alt="skill" />
        </div>
    )
}
