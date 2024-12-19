import React, { useContext } from 'react'
import './profile.scss'
import List from '../../components/list/List'
import Chat from '../../components/chat/Chat'
import apiRequest from '../../lib/apiRequest'
import { Await, Link, useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
import noAvatar from '../../../public/noavatar.jpg'

const Profile = () => {
     const navigate = useNavigate()
     const data = useLoaderData();
     const { updateUser, currentUser } = useContext(AuthContext);

     const handleLogout = async () => {
          try {
               await apiRequest.post("/auth/logout")
               updateUser(null);
               navigate("/")
          } catch (err) {
               console.log(err)
          }
     }

     return (
          <div className='profile'>
               <div className="details">
                    <div className="wrapper">
                         <div className="title">
                              <h1>User Information</h1>
                              <Link to="/profile/update">
                                   <button>Update Profile</button>
                              </Link>
                         </div> 

                         <div className="info">
                              <span>Avatar:
                                   <img src={currentUser.avatar || noAvatar} alt="" />
                              </span>
                              <span>Username: <b>{currentUser.username}</b></span>
                              <span>Email: <b>{currentUser.email}</b></span>
                              <button onClick={handleLogout}>Logout</button>
                         </div>

                         <div className="title">
                              <h1>My List</h1>
                              <button>Create new post</button>
                         </div> 

                         <List />

                         <div className="title">
                              <h1>Saved List</h1>
                         </div>
                    </div>
               </div>

               <div className="chatContainer">
                    <div className="wrapper">
                         <Chat />
                    </div>
               </div>
          </div>
  )
}

export default Profile