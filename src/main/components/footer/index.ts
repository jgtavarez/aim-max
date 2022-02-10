import { Footer as FooterHOC } from './Footer';
import { FooterMedia } from './FooterMedia';
import { FooterHOCProps } from '../../interfaces/main.interfaces';

export const Footer: FooterHOCProps = Object.assign( FooterHOC, {
    Media: FooterMedia,
})


export default Footer;