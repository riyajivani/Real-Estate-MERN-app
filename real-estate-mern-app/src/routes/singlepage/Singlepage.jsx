import React from 'react'
import './singlepage.scss'
import Slider from '../../components/slider/Slider'
import pin from '../../../public/pin.png'
import Map from '../../components/map/Map'
import save from '../../../public/save.png'
import chat from '../../../public/chat.png'
import utility from '../../../public/utility.png'
import pet from '../../../public/pet.png'
import fee from '../../../public/fee.png'
import size from '../../../public/size.png'
import bed from '../../../public/bed.png'
import bath from '../../../public/bath.png'
import school from '../../../public/school.png'
import bus from '../../../public/bus.png'
import restaurant from '../../../public/restaurant.png'
import { useLoaderData } from 'react-router-dom'
import DOMPurify from 'dompurify'

const Singlepage = () => {
  const post = useLoaderData();
  console.log(post)

  return (
    <div className='singlepage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          
          <div className="info">
            
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src={pin} alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            
            <div className="bottom" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.postDetail.desc) }}></div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <p className='title'>General</p>
          <div className="listVertical">
            <div className="feature">
              <img src={utility} alt="" />
              <div className="featureText">
              <span>Utilities</span>
                {post.postDetail.utilities === "Owner" ?
                  <p>Owner is responsible</p>
                  : <p>Tenant is responsible</p>
                }
              </div>
            </div>

            <div className="feature">
              <img src={pet} alt="" />
              <div className="featureText">
              <span>Pet policy</span>
                {post.postDetail.pet === "Allowed" ?
                  <p>pet is allowed</p>
                  : <p>pet is not allowed</p>
                }
              </div>
            </div>

            <div className="feature">
              <img src={fee} alt="" />
              <div className="featureText">
                <span>Income policy</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
            
          </div>
          
          <p className='title'>Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src={size} alt="" />
              <span>{post.postDetail.size}</span>
            </div>

            <div className="size">
              <img src={bed} alt="" />
              <span>{post.bedroom}</span>
            </div>

            <div className="size">
              <img src={bath} alt="" />
              <span>{post.bathroom}</span>
            </div>
          </div>
          
          <p className='title'>Nearby Places</p>
          <div className="listHorizontal">
          <div className="feature">
              <img src={school} alt="" />
              <div className="featureText">
              <span>School</span>
                <p>{post.postDetail.school}</p>
              </div>
            </div>

            <div className="feature">
              <img src={bus} alt="" />
              <div className="featureText">
              <span>Bus stop</span>
                <p>{post.postDetail.bus}</p>
              </div>
            </div>

            <div className="feature">
              <img src={restaurant} alt="" />
              <div className="featureText">
              <span>Restaurant</span>
                <p>{post.postDetail.restaurant}</p>
              </div>
            </div>
          </div>
          
          <p className='title'>Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>

          <div className="buttons">
            <button>
              <img src={chat} alt=''/>
              Send a message
            </button>

            <button>
              <img src={save} alt=''/>
              Save a place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singlepage