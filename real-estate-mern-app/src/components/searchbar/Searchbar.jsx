import React, { useState } from 'react'
import './searchbar.scss'
import search from '../../../public/search.png'
import { Link } from 'react-router-dom'

const Searchbar = () => {

  const types = ["buy", "rent"]
  const [query, setQuery] = useState({
    type:"buy",
    city: "",
    minPrice:0,
    maxPrice:0
  })

  const switchType = (val) => {
    setQuery((prev)=>({...prev, type:val}));
  }

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className='searchbar'>
      <div className="type">
      {types.map((type)=>(
        <button key={type} onClick={()=>switchType(type)} className={query.type===type ? "active" : ""}>{type}</button>
      ))}
      </div>
      
      <form>
        <input type="text" name="city" placeholder='city' onChange={handleChange} />
        <input type="number" name="minPrice" min={0} max={10000000} placeholder='Min Price' onChange={handleChange} />
        <input type="number" name="maxPrice" min={0} max={10000000} placeholder='Max Price' onChange={handleChange} />
        <Link to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}>
          <button>
            <img src={search} alt="" />
          </button>
        </Link>
      </form>
    </div>
  )
}

export default Searchbar