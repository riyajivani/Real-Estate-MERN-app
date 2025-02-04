import React, { useContext } from 'react'
import './card.scss'
import { Link } from 'react-router-dom'
import pin from '../../../public/pin.png'
import bed from '../../../public/bed.png'
import bath from '../../../public/bath.png'
import save from '../../../public/save.png'
import chat from '../../../public/chat.png'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Card = ({ item, hideChatIcon }) => {
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext);

  const handleChatClick = () => {
    navigate('/profile', { state: { receiverId: item.userId } });
  };

  const isOwner = currentUser?.id === item.userId;

  return (
    <div className='card'>
      
      <Link to={`/${item.id}`} className='imgContainer'>
        <img src={item.images[0]} alt='' />
      </Link>
      
      <div className="textContainer">
        
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        
        <p className='address'>
          <img src={pin} alt="" />
          <span>{item.address}</span>
        </p>
        
        <p className="price">$ {item.price}</p>
        
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src={bed} alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>

            <div className="feature">
              <img src={bath} alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          
          <div className="icons">
            {/* <div className="icon">
              <img src={save} alt="" />
            </div> */}

            {!hideChatIcon && !isOwner && (
              <div className="icon" onClick={handleChatClick}>
                <img src={chat} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Card