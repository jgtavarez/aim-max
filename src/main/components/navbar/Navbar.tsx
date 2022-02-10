import { NavLink } from 'react-router-dom';
import { NavbarProps } from '../../interfaces/main.interfaces';

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <div className="bg-bold-blue text-white p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <NavLink to='home'>
          <img src="./logo.png" className="w-24 md:w-full" alt="logo" />
        </NavLink>

        <ul>
          {children}
        </ul>
      </nav>
    </div>
  )
}
