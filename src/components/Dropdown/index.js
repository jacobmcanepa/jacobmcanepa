import { NavLink } from 'react-router-dom';

function Dropdown() {
  return (
    <div className='absolute lg-dropdown'>
      <div className='bg-secondary flex flex-col w-60 rounded-xl'>
        <NavLink className='nav-link' to='/devwork'>Web Development</NavLink>
        <NavLink className='nav-link' to='/videowork'>Videography</NavLink>
      </div>
    </div>
  );
}

export default Dropdown;