import React, { useContext, useEffect, useState } from 'react'
import './profile.scss'
import List from '../../components/list/List'
import Chat from '../../components/chat/Chat'
import apiRequest from '../../lib/apiRequest'
import { Link, useLoaderData, useNavigate, redirect } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
import noAvatar from '../../../public/noavatar.jpg'
import Card from '../../components/card/Card'
import { useLocation } from 'react-router-dom'

const Profile = () => {
     const location = useLocation()
     const navigate = useNavigate()
     const data = useLoaderData();
     const { updateUser, currentUser } = useContext(AuthContext);

     const [initialReceiver, setInitialReceiver] = useState(null);

          const handleLogout = async () => {
               try {
                    await apiRequest.post("/auth/logout")
                    updateUser(null);
                    navigate("/")
               } catch (err) {
                    console.log(err)
               }
          }

          const handleAddPost = () => {
               navigate("/add")
          }

          useEffect(() => {
               if (!currentUser) {
                    redirect("/login")
               }
               if (location.state?.receiverId) {
                    setInitialReceiver(location.state.receiverId);
                    navigate(location.pathname, { replace: true });
               }
          }, [currentUser, location, navigate])

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
                                        <img src={currentUser?.avatar || noAvatar} alt="" />
                                   </span>
                                   <span>Username: <b>{currentUser.username}</b></span>
                                   <span>Email: <b>{currentUser.email}</b></span>
                                   <button onClick={handleLogout}>Logout</button>
                              </div>

                              <div className="title">
                                   <h1>My List</h1>
                                   <button onClick={handleAddPost}>Create new post</button>
                              </div> 

                              <List posts={data?.postResponse?.userPosts || []} hideChatIcon={true} />

                              <div className="title">
                                   <h1>Saved List</h1>
                              </div>
                              <List posts={data?.postResponse?.savedPost || []} hideChatIcon={false} />
                         </div>
                    </div>

                    <div className="chatContainer">
                         <div className="wrapper">
                              <Chat chats={data.chatResponse || []} initialReceiver={initialReceiver} />
                         </div>
                    </div>
               </div>
          )
     }

export default Profile