import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

function Nav() {
  const [navToggler, setNavToggler] = useState(false);

  const clickHandler = () => {
    setNavToggler(!navToggler);
  };

  return (
    <nav className='nav-custom lg:flex lg:justify-between lg:items-center py-2'>
      <div className='h-auto lg:h-24 mx-5 flex items-center nav-custom justify-between pb-2'>
        <Link to='/jacobmcanepa'>
          <h1 className='logo text-5xl p-2 font-bold font-serif'>Jacob Canepa</h1>
        </Link>
        <button className='lg:hidden p-3 mr-2 nav-bars text-2xl rounded-xl' onClick={clickHandler}>
          {!navToggler ? <FaBars /> : <AiOutlineClose />}
        </button>
      </div>
      <div className={
        navToggler ? 'flex flex-col gap-4 lg:inline' : 'hidden lg:inline'
      }>
        <NavLink className='nav-link' to='/jacobmcanepa' onClick={clickHandler}>Home</NavLink>
        <NavLink className='nav-link' to='/about' onClick={clickHandler}>About</NavLink>
        <NavLink className='nav-link' to='/work' onClick={clickHandler}>Work</NavLink>
        <NavLink className='nav-link' to='/contact' onClick={clickHandler}>Contact</NavLink>
      </div>
    </nav>
    
  );
}

export default Nav;