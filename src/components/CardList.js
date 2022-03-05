import React from 'react'
import Masonry from 'react-masonry-css'

import '../style/CardList.scss'
import Card from './Card'

import { meta } from '../data/imageMeta'


const CardList = () => {

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <>
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="card-list"
      columnClassName="card-column">
      
      {
        meta.map( m => {
          return <Card key={m.ChallengeNumber} imageNumber={m.ChallengeNumber} title={m.Title}/>
        })
      }
      
    </Masonry>
    
    </>
  )
}

export default CardList