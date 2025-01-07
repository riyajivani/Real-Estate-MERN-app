import React, { useState, useContext, useEffect, useRef } from 'react'
import './chat.scss'
import noAvatar from '../../../public/noavatar.jpg'
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';
import { format } from 'timeago.js'
import { SocketContext } from '../../context/SocketContext';

const Chat = ({ chats, initialReceiver }) => {
     const [chat, setChat] = useState(null);
     const { currentUser } = useContext(AuthContext)
     const { socket } = useContext(SocketContext)
     const messageEndRef = useRef()

     useEffect(() => {
          messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
     }, [chat])

     useEffect(() => {
          if (initialReceiver) {
               console.log(initialReceiver)
               const initialChat = chats.find(c => c.receiver.id === initialReceiver);
               if (initialChat) {
                    // console.log(initialChat)
                    handleOpenChat(initialChat.id, initialChat.receiver);
               } else {
                    const createChat = async () => {
                         try {
                              // Add a new chat by calling the addChat API
                              const newChat = await apiRequest.post("/chats", {
                                   receiverId: initialReceiver
                              });

                              const chatsRes = await apiRequest.get("/chats");
                              const newChatData = chatsRes.data.find(c => c.id === newChat.data.id);

                              handleOpenChat(newChatData.id, newChatData.receiver);
                         } catch (err) {
                              console.log(err);
                         }
                    }
                    createChat();
               }
          }
     }, [initialReceiver, chats]);

     const handleOpenChat = async (id, receiver) => {
          try {
               if (chat && chat.id === id) return;
               const res = await apiRequest("/chats/" + id)
               if (res.data && res.data.messages) {
                    setChat({
                         ...res.data,
                         receiver
                    });
               }
               // setChat({ ...res.data, receiver, messages: res.data.messages.length ? res.data.messages : [] })
          } catch (err) {
               console.log(err)
               setChat({
                    id,
                    receiver,
                    messages: [] // Empty messages for a new chat
               });
          }
     }

     const handleSubmit = async (e) => {
          e.preventDefault()
          const formData = new FormData(e.target)
          const text = formData.get("text")
          if (!text) return

          try {
               const res = await apiRequest.post("/messages/" + chat.id, { text })
               setChat(prev => ({ ...prev, messages: [...prev.messages, res.data] }))
               e.target.reset()
               socket.emit("sendMessage", {
                    receiverId: chat.receiver.id,
                    data: res.data
               })
          } catch (err) {
               console.log(err)
          }
     }

     useEffect(() => {

          const read = async () => {
               try {
                    await apiRequest.put("/chats/read" + chat.id)
               } catch (err) {
                    console.log(err)
               }
          }
          if (chat && socket) {
               socket.on("getMessage", (data) => {
                    if (chat.id === data.chatId) {
                         setChat(prev => ({ ...prev, messages: [...prev.messages, data] }))
                         read()
                    }
               })
          }
          return () => {
               socket.off("getMessage");
          };
     }, [socket, chat])

     const handleCloseChat = () => {
          setChat(null);
          // Refresh the chats feed by re - fetching chats from the API
          // const fetchChats = async () => {
          //      try {
          //           const res = await apiRequest.get("/chats");
          //           setChat(res.data);  // Update the parent component's chats state
          //      } catch (err) {
          //           console.log(err);
          //      }
          // }
          // fetchChats();
          window.location.reload()
     }

  return (
     <div className='chat'>
          <div className="messages">
                 <h1>Messages</h1>
                 {
                      chats.map(c => (
                           <div className="message" key={c.id}
                                style={{
                                     backgroundColor: c.seenBy.includes(currentUser.id) || chat && chat.id === c.id ? "white" : "#fecd514e"
                                }}
                                onClick={() => handleOpenChat(c.id, c.receiver)}
                           >
                                <img src={c.receiver.avatar || noAvatar} alt="" />
                                <span>{c.receiver.username}</span>
                                <p>{c.lastMessage}</p>
                           </div>
                      ))
                 }
          </div>
          {chat && 
               <div className="chatbox">
               <div className="top">
                    <div className="user">
                                <img src={chat.receiver.avatar || noAvatar} alt="" />
                                {chat.receiver.username}
                    </div>
                           <span className='close' onClick={handleCloseChat}>X</span>
               </div>
                      <div className="center">
                           {chat.messages.map(message => (
                                <div className="chatMessage"
                                     key={message.id}
                                     style={{
                                          alignSelf: message.userId === currentUser.id ? "flex-end" : "flex-start",
                                          textAlign: message.userId === currentUser.id ? "right" : "left"
                                     }}
                                >
                                     <p>{message.text}</p>
                                     <span>{format(message.createdAt)}</span>
                                </div>
                           ))}

                           <div ref={messageEndRef}></div>
                      </div>
                      <form onSubmit={handleSubmit} className="bottom">
                           <textarea name="text"></textarea>
                    <button>Send</button>
                      </form>
          </div>
          }
    </div>
  )
}

export default Chat