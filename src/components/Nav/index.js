import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [navToggler, setNavToggler] = useState(false);
  const [workToggler, setWorkToggler] = useState(false);

  const clickHandler = () => {
    setNavToggler(!navToggler);
  };

  const workHandler = () => {
    setWorkToggler(!workToggler);
  };

  return (
    <>
    <nav className='nav-custom nav-shadow lg:flex lg:justify-between lg:items-center py-2 fixed w-full'>
      <div className='h-auto lg:h-24 mx-5 flex items-center nav-custom justify-between pb-2'>
        <Link to='/jacobmcanepa'>
          <h1 className='logo text-5xl p-2 font-bold font-serif'>JC</h1>
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
        <button className='nav-link work-btn dropdown' onClick={workHandler}>
          Work <FontAwesomeIcon icon={faChevronDown} className='chevron' />
          <div className='dropdown-content bg-third rounded pt-5 pb-7 pl-5 pr-20 mt-3'>
            <ul className='text-left'>
              <li className='mb-4'>
                <NavLink className='dropdown-link py-2 px-4 rounded' to='/devwork' onClick={clickHandler}>Websites</NavLink>
              </li>
              <li>
                <NavLink className='dropdown-link py-2 px-4 rounded' to='/videowork' onClick={clickHandler}>Videography</NavLink>
              </li>
            </ul>
          </div>
        </button>
        <div className={
          workToggler ? 'pl-4 py-2 sm-dropdown lg:hidden' : 'hidden'
        }>
          <NavLink className='nav-link' to='/devwork' onClick={clickHandler}>Websites</NavLink>
          <NavLink className='nav-link' to='/videowork' onClick={clickHandler}>Videography</NavLink>
        </div>
        <NavLink className='nav-link' to='/contact' onClick={clickHandler}>Contact</NavLink>
      </div>
    </nav>
    </>
  );
}

export default Nav;