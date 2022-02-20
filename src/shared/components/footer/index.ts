import { Footer as FooterHOC } from './Footer';
import { FooterHOCProps } from '../../interfaces/footer.interfaces';
import { FooterMedia } from './FooterMedia';

export const Footer: FooterHOCProps = Object.assign( FooterHOC, {
    Media: FooterMedia,
})


export default Footer;