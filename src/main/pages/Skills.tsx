import { SkillCard } from '../../shared/components/SkillCard';
import { divider } from '../assets';
import { skills } from '../data/data';
import { useSkills } from '../hooks/useSkills';

export const Skills = () => {
  const { state, handleSkill } = useSkills();

  return (
    <div className="bg-medium-blue py-14 px-5 lg:py-20">
      <div className="container mx-auto">
        <h2 className="text-white text-center text-4xl font-bold pb-14 lg:text-5xl lg:pb-20">4 <span className="text-light-blue">AIMING SKILLS</span> TO MASTER</h2>
        <div className='flex flex-col gap-6 items-center md:flex-row md:flex-wrap md:justify-center lg:gap-12'>
          {
            skills.map(variant => (
              <div key={variant} onClick={() => handleSkill(variant)}>
                <SkillCard variant={variant} className={state.skill===variant ? 'bg-bold-white' : ''} />
              </div>
            ))
          }
        </div>
        <div className='bg-bold-white p-12 mt-12'>
          <h3 className='text-white font-bold text-3xl mb-6 uppercase lg:text-4xl'>{state.skill} EXAMPLE</h3>
          <p className='text-medium-gray mb-10 md:text-2.5xl'>{state.description}</p>
          <iframe className='w-full h-full md:h-124 lg:h-204' title='noGeneral' src={state.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <img className='w-full my-12' src={divider} alt='divider' />
        <div className='bg-bold-white p-12'>
          <h3 className="text-white text-3xl font-bold pb-10 lg:text-4xl">GENERAL <span className="text-light-blue">VIDEO</span> EXPLAIN</h3>
          <iframe className='w-full h-full md:h-124 lg:h-204' title='noGeneral' src="https://www.youtube.com/embed/nYcPR2aNeRM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};
