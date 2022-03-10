import { Navigate, useParams } from "react-router-dom"
import { List } from "../components/list";
import { useGuidesGame } from '../hooks/useGuidesGame';
import { SkillCard } from '../../shared/components/SkillCard';
import { pngApex, pngCod, pngCsgo, pngFortnite, pngOverwatch, pngRainbow, pngValorant } from '../assets';
import { Navbar } from '../../shared/components/navbar';
import { Footer } from '../../shared/components/footer';
import { links, medias } from '../../shared/data/data';

export const GuidesGame = () => {

  const { game } = useParams();
  const { data, loading } = useGuidesGame(game);

  if (!data) {
    return <Navigate to='/guides' />
  }

  if(loading){
    return(
      <p>Loading...</p>
    )
  }

  return (
    <>
      <Navbar>
        {
          links.map(({ to, text }) => (
            <Navbar.Link key={to} to={to} text={text} />
          ))
        }
      </Navbar>

      <div className="bg-medium-blue py-12 px-5 md:py-20">
        <div className="container mx-auto flex flex-col-reverse gap-6 lg:flex-row lg:justify-between lg:items-center">
          <img src={
            data.name === 'apex' ? pngApex :
              data.name === 'cod' ? pngCod :
                data.name === 'csgo' ? pngCsgo :
                  data.name === 'fortnite' ? pngFortnite :
                    data.name === 'overwatch' ? pngOverwatch :
                      data.name === 'rainbow' ? pngRainbow :
                        data.name === 'valorant' ? pngValorant : ''
          } alt="game-media" />
          <div className="lg:max-w-7xl lg:text-right">
            <h2 className="text-white uppercase text-4xl font-bold md:text-6xl">{data.name} AIM GUIDE</h2>
            <p className="text-medium-gray mt-6 lg:mt-10">{data.description}</p>
          </div>
        </div>
      </div>
      <div className="bg-medium-white pt-12 pb-4 px-5 md:pt-20 md:pb-12">
        <div className="container mx-auto">
          <h3 className="text-medium-blue text-3xl font-bold mb-6 md:mb-10 md:text-5xl">GAMEPLAY KEY FEATURES</h3>
          {
            data.game_guide?.list.map(list => (
              <List key={list.title} list={list}>
                <List.Item />
              </List>
            ))
          }
        </div>
      </div>
      <div className="bg-medium-blue py-12 px-5 md:py-20">
        <div className="container mx-auto">
          <h3 className="text-white text-3xl font-bold mb-12 md:mb-10 uppercase md:text-5xl">MAIN SKILLS REQUIRED AT {data.name}</h3>
          <div className="flex flex-col gap-10 items-center md:flex-row md:gap-0 md:justify-between lg:justify-evenly">
            {
              data.game_guide?.skills.map(skill => (
                <SkillCard key={skill} variant={skill} />
              ))
            }
          </div>
        </div>
      </div>
      <div className="bg-medium-white py-12 px-5 md:py-20">
        <div className="container mx-auto">
          <h3 className="text-medium-blue text-3xl font-bold mb-6 md:mb-10 md:text-5xl">GAMEPLAY KEY FEATURES</h3>
          <div className="flex flex-col gap-3 text-2xl md:flex-row md:justify-between md:flex-wrap lg:gap-10 lg:text-2.5xl">
            {
              data.game_guide?.summary.map((paragraph, i) => (
                <p key={paragraph} className={`md:inline-block ${i === 0 ? 'w-full' : 'flex-1'}`}>{paragraph}</p>
              ))
            }
          </div>
        </div>
      </div>

      <Footer>
        {
          medias.map(({ icon, href }) => (
            <Footer.Media key={icon} icon={icon} href={href} />
          ))
        }
      </Footer>
    </>
  )
}
