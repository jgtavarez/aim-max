import { FooterMediaProps } from '../../interfaces/main.interfaces';


export const FooterMedia = ({ icon, href }: FooterMediaProps) => {
  return (
    <a href={href} target="_blank" >
      <img src={icon} alt="media" />
    </a>
  )
}
