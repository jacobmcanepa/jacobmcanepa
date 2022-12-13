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
    <nav className='h-auto md:h-24 p2 bg-blue-200 max-w-6xl mx-auto flex justify-between md:items-center'>
      <Link to='/jacobmcanepa'>
        <h1>Jacob Canepa</h1>
      </Link>
      <div>
        <NavLink className='nav-link' to='/about'>About</NavLink>
        <NavLink className='nav-link' to='/work'>Work</NavLink>
        <NavLink className='nav-link' to='/contact'>Contact</NavLink>
      </div>
      <button className='inline md:hidden self-start nav-link' onClick={clickHandler}>
        {!navToggler ? <FaBars /> : <AiOutlineClose />}
      </button>
    </nav>
  );
}

export default Nav;
