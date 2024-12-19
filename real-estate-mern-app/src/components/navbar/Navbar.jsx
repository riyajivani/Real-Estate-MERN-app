import React, { useContext, useState } from 'react'
import './navbar.scss'
import logo from '../../../public/logo.png'
import menu from '../../../public/menu.png'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import noAvatar from '../../../public/noavatar.jpg'

const Navbar = () => {
  const [open,setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext)
  const user = true;

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

            {
          currentUser 
            ? <div className="user">
              <img src={currentUser.avatar || noAvatar} alt="" />
              <span>{currentUser.username}</span>
              <Link to='/profile' className='profile'>
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div> 
            :<>
              <Link to='/login'>Sign in</Link>
              <Link to='/register' className='register'>Sign up</Link>
            </>
            }
            
            <div className="menuicon">
              <img src={menu} alt='' onClick={()=>{setOpen(!open)}}/>
            </div>

            <div className={open ? "menu active" : "menu"}>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link>
              <Link to='/other'>Other</Link>
          <Link to='/login'>Sign in</Link>
          <Link to='/register'>Sign up</Link>
            </div>
          </div>
    </nav>
  )
}

export default Navbar