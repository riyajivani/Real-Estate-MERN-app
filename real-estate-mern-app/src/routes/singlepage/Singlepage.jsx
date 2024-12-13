import React from 'react'
import './singlepage.scss'
import Slider from '../../components/slider/Slider'
import {singlePostData} from '../../lib/dummydata'
import {userData} from '../../lib/dummydata'
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

const Singlepage = () => {

  return (
    <div className='singlepage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images}/>
          
          <div className="info">
            
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src={pin} alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">{singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            
            <div className="bottom">
              {singlePostData.description}
            </div>
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
              <p>Render is responsible</p>
              </div>
            </div>

            <div className="feature">
              <img src={pet} alt="" />
              <div className="featureText">
              <span>Pet policy</span>
              <p>Pets allowed</p>
              </div>
            </div>

            <div className="feature">
              <img src={fee} alt="" />
              <div className="featureText">
              <span>Property fees</span>
              <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
            
          </div>
          
          <p className='title'>Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src={size} alt="" />
              <span>80sqft</span>
            </div>

            <div className="size">
              <img src={bed} alt="" />
              <span>2 beds</span>
            </div>

            <div className="size">
              <img src={bath} alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          
          <p className='title'>Nearby Places</p>
          <div className="listHorizontal">
          <div className="feature">
              <img src={school} alt="" />
              <div className="featureText">
              <span>School</span>
              <p>250m away</p>
              </div>
            </div>

            <div className="feature">
              <img src={bus} alt="" />
              <div className="featureText">
              <span>Bus stop</span>
              <p>100m away</p>
              </div>
            </div>

            <div className="feature">
              <img src={restaurant} alt="" />
              <div className="featureText">
              <span>Restaurant</span>
              <p>200m away</p>
              </div>
            </div>
          </div>
          
          <p className='title'>Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]}/>
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