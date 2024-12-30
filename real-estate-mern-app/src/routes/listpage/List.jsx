import React from 'react'
import './list.scss'
import {listData} from '../../lib/dummydata'
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';
import { useLoaderData } from 'react-router-dom';

const List = () => {
  const posts = useLoaderData();
  console.log(posts)
  return (
    <div className='listpage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {
            posts.map((item) => (
              <Card key={item.id} item={item} hideChatIcon={false} />
            ))
          }
        </div>
      </div>
      <div className="mapContainer">
        <Map items={posts} />
      </div>
    </div>
  )
}

export default List