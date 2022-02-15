import { Props as FooterProps } from '../components/footer/Footer';
import { Props as FooterMediaProps } from '../components/footer/FooterMedia';

export interface FooterHOCProps {
    ({ children }: FooterProps): JSX.Element;
    Media: ({ icon, href }: FooterMediaProps) => JSX.Element;
}