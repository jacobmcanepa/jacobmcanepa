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
    <nav className='h-auto md:h-24 p2 bg-blue-200 mx-auto flex justify-between md:items-center'>
      <Link to='/jacobmcanepa'>
        <h1>Jacob Canepa</h1>
      </Link>
      <div className={
        navToggler ? 'flex flex-col gap-4 md:inline' : 'hidden md:inline'
      }>
        <NavLink className='nav-link' to='/about' onClick={clickHandler}>About</NavLink>
        <NavLink className='nav-link' to='/work' onClick={clickHandler}>Work</NavLink>
        <NavLink className='nav-link' to='/contact' onClick={clickHandler}>Contact</NavLink>
      </div>
      <button className='inline md:hidden self-start nav-link' onClick={clickHandler}>
        {!navToggler ? <FaBars /> : <AiOutlineClose />}
      </button>
    </nav>
  );
}

export default Nav;
