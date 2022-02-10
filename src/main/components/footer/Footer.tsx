import { FooterProps } from '../../interfaces/main.interfaces';

export const Footer = ({ children }: FooterProps) => {
    return (
        <div className='bg-bold-blue text-medium-gray'>
            <footer className='flex flex-col items-center container mx-auto'>
                <h5>© 2021 Juan López</h5>
                <div>
                    <img src="./logo-small.png" alt="logo" />
                    <div className="hidden">
                        <h5>Terms of Service</h5>
                        <h5>Privacy Policy</h5>
                        <h5>Security</h5>
                        <h5>Sitemap</h5>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
                <h5>All rights reserved</h5>
            </footer>
        </div>
    )
}
