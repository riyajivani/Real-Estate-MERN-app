import React from 'react'
import './filter.scss'
import search from '../../../public/search.png'

const Filter = () => {
  return (
    <div className='filter'>
      <h1>Search results for <b>London</b></h1>
      
      <div className="top">
        
      <div className="item">
          <label htmlFor='city'>Location</label>
          <input type='text' id='city' name='city' placeholder='city location'/>
        </div>
        
      </div>
      
      <div className="bottom">

        <div className="item">
          <label htmlFor='type'>Type</label>
          <select name='type' id='type'>
            <option value='any'>any</option>
            <option value='buy'>Buy</option>
            <option value='rent'>Rent</option>
          </select>
        </div>
        
        <div className="item">
          <label htmlFor='property'>Property</label>
          <select name='property' id='property'>
            <option value='any'>any</option>
            <option value='apartment'>Apartment</option>
            <option value='house'>House</option>
            <option value='condo'>Condo</option>
            <option value='land'>Land</option>
          </select>
        </div>
        
        <div className="item">
          <label htmlFor='minprice'>Min Price</label>
          <input type='number' id='minprice' name='minprice' placeholder='any'/>
        </div>
        
        <div className="item">
          <label htmlFor='maxprice'>Max Price</label>
          <input type='text' id='maxprice' name='maxprice' placeholder='any'/>
        </div>
        
        <div className="item">
          <label htmlFor='bedroom'>Bedroom</label>
          <input type='text' id='bedroom' name='bedroom' placeholder='any'/>
        </div>

        <button>
          <img src={search} alt=''/>
        </button>

      </div>
    </div>
  )
}

export default Filter