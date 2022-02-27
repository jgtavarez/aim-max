import { Navigate, useParams, NavLink } from 'react-router-dom';
import { cardsExercisesLeader } from '../data/data';
import { useLeaderboard } from '../hooks/useLeaderboard';

export const Leaderboard = () => {

  const { exercise } = useParams();
  const { data, loading } = useLeaderboard(exercise);

  if (!data) {
    return <Navigate to='/home' />
  }

  let top: any[] = []
  for (let index = 0; index < 3; index++) {
    top.push(
      <div key={data[index]?._id} className='bg-white p-8 rounded-2xl flex justify-between items-center gap-8'>
        <div className="bg-bold-gray w-16 h-16 flex flex-col justify-center items-center rounded-full">
          <h2 className="font-bold text-white text-4xl">{index + 1}</h2>
        </div>
        <h4>{data[index]?.username || 'NA'}</h4>
        <p className="font-bold">{data[index]?.score || 'NA'}</p>
      </div>
    )
  }

  let best: any[] = []
  for (let index = 3; index < 10; index++) {
    best.push(
      <div key={data[index]?._id} className='bg-white p-8 rounded-2xl flex justify-start items-center gap-8'>
        <div className="bg-bold-gray w-16 h-16 flex flex-col justify-center items-center rounded-full">
          <h2 className="font-bold text-white text-4xl">{index + 1}</h2>
        </div>
        <h4>{data[index]?.username || 'NA'}</h4>
        <p className="font-bold">{data[index]?.score || 'NA'}</p>
      </div>
    )
  }

  return (
    <div className='flex text-medium-blue'>
      <ul className="bg-white justify-between py-16 w-1/5 flex flex-col">
        {
          cardsExercisesLeader.map(card => (
            <NavLink key={card.title} to={card.to} className={({ isActive }) => isActive ? 'bg-light-sky' : ''}>
              <li className='flex items-center cursor-pointer pl-10 py-3'>
                <img className='w-10' src={card.media} alt="logo" />
                <p className='ml-4 font-medium text-3xl'>{card.title}</p>
              </li>
            </NavLink>
          ))
        }
      </ul>
      <div className='bg-light-gray w-4/5 py-16 px-14'>
        <div className='container mx-auto'>
          <h2 className='text-4xl font-bold'>Top Players</h2>
          <div className="flex justify-between my-12">
            {top}
          </div>
          <h3 className='text-3xl font-bold'>Best Players</h3>
          <div className="flex flex-col justify-between gap-6 mt-6">
            {best}
          </div>
        </div>
      </div>
    </div>
  );
};
