import { NavLink } from 'react-router-dom';
import { createContext, ReactElement } from 'react';
import { NavbarContextProps } from '../../interfaces/navbar.interfaces';
import { useNavbar } from '../../hooks/useNavbar';

export const NavbarContext = createContext({} as NavbarContextProps);
const { Provider } = NavbarContext;

export interface Props {
  children: ReactElement | ReactElement[];
}

export const Navbar = ({ children }: Props) => {

  const { show, toggleNavbar } = useNavbar();

  return (
    <Provider value={{ show, toggleNavbar }}>
      <div className="bg-bold-blue text-white p-4 lg:p-7">
        <nav className="flex justify-between items-center container mx-auto">
          <NavLink to='home'>
            <img src="./logo.png" className="w-24 md:w-full" alt="logo" />
          </NavLink>

          <span className='font-bold text-4xl z-20 cursor-pointer lg:hidden' onClick={toggleNavbar}>{show ? '✖' : '☰'}</span>

          <ul className={`bg-bold-blue h-screen w-screen top-0 z-10 fixed flex flex-col gap-6 justify-center items-center lg:static lg:h-auto lg:w-auto lg:flex-row lg:gap-12 ${show ? 'left-0' : '-left-full'}`} style={{transition: "0.3s ease-in"}}>
            {children}
          </ul>
        </nav>
      </div>
    </Provider>
  )
}
