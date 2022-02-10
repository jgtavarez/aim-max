import { FooterProps } from '../../interfaces/main.interfaces';

export const Footer = ({ children }: FooterProps) => {
    return (
        <div className='bg-bold-blue text-medium-gray py-6'>
            <footer className='flex flex-col items-center container mx-auto gap-5'>
                <h5 className='hidden'>© 2021 Juan López</h5>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <img src="./logo-small.png" alt="logo" />
                    <div className="text-center cursor-pointer">
                        <h5>Terms of Service</h5>
                        <h5>Privacy Policy</h5>
                        <h5>Security</h5>
                        <h5>Sitemap</h5>
                    </div>
                    <div className='flex items-center gap-5'>
                        {children}
                    </div>
                </div>
                <h5>All rights reserved</h5>
            </footer>
        </div>
    )
}
