import { NavLink } from 'react-router-dom';
import { createContext } from 'react';
import { NavbarProps, NavbarContextProps } from '../../interfaces/main.interfaces';
import { useNavbar } from '../../hooks/useNavbar';

export const NavbarContext = createContext({} as NavbarContextProps);
const { Provider } = NavbarContext;

export const Navbar = ({ children }: NavbarProps) => {

  const { show, toggleNavbar } = useNavbar();

  return (
    <Provider value={{ show, toggleNavbar }}>
      <div className="bg-bold-blue text-white p-4">
        <nav className="flex justify-between items-center container mx-auto">
          <NavLink to='home'>
            <img src="./logo.png" className="w-24 md:w-full" alt="logo" />
          </NavLink>

          <span className='font-bold text-4xl z-20' onClick={toggleNavbar}>{show ? '✖' : '☰'}</span>

          <ul className={`bg-bold-blue h-screen w-screen top-0 z-10 fixed flex flex-col gap-6 justify-center items-center ${show ? 'left-0' : '-left-full'}`} style={{transition: "0.3s ease-in"}}>
            {children}
          </ul>
        </nav>
      </div>
    </Provider>
  )
}
