import React from 'react'
import './home.scss'
import bg from '../../../public/bg.png'
import Searchbar from '../../components/searchbar/Searchbar'

const Home = () => {
  return (
    <div className='homePage'>
     <div className="textContainer">
          <div className="wrapper">
               
               <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
               
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aut quis sapiente error excepturi iste suscipit sint itaque aliquam praesentium.</p>
               <Searchbar/>
               
               <div className="boxes">
                    <div className="box">
                         <h1>16+</h1>
                         <h2>Years of Experience</h2>
                    </div>
                    
                    <div className="box">
                         <h1>200</h1>
                         <h2>Award Gained</h2>
                    </div>
                    
                    <div className="box">
                         <h1>1200+</h1>
                         <h2>Prperty ready</h2>
                    </div>
               </div>
          </div>
     </div>
     <div className="imgContainer">
          <img src={bg} alt=""/>
     </div>
    </div>
  )
}

export default Home