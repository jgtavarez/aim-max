export interface Props {
  icon: string;
  href: string;
}

export const FooterMedia = ({ icon, href }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" >
      <img src={icon} alt="media" />
    </a>
  )
}
