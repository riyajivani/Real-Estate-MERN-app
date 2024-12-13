import React from 'react'
import './list.scss'
import {listData} from '../../lib/dummydata'
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';

const List = () => {
const data = listData;

  return (
    <div className='listpage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {
            data.map((item)=>(
              <Card key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  )
}

export default List