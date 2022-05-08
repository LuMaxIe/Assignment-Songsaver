import './navbar_styles.css'
import { Link } from 'react-router-dom';

export const NavContainer = () => {
  return (
    <div className="navbar">
      <img src='/winc-logo-2.png' alt='wincacademy logo' />
      <Link to="/About" className='about-link'>About</Link>
    </div>
  )
}