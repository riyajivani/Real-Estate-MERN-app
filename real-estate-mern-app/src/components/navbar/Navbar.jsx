import React, { useState } from 'react'
import './navbar.scss'
import logo from '../../../public/logo.png'
import menu from '../../../public/menu.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <nav>
          <div className="left">
            <a href='/' className='logo'>
              <img src={logo} alt=''/>
              <span>Rees Deal</span>
            </a>
            
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/other'>Other</Link>

          </div>

          <div className="right">

            <Link to='/signin'>Sign in</Link>
            <Link to='/signout' className='register'>Sign up</Link>
            
            <div className="menuicon">
              <img src={menu} alt='' onClick={()=>{setOpen(!open)}}/>
            </div>

            <div className={open ? "menu active" : "menu"}>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link>
              <Link to='/other'>Other</Link>
              <Link to='/signin'>Sign in</Link>
              <Link to='/signout'>Sign up</Link>
            </div>
          </div>
    </nav>
  )
}

export default Navbar