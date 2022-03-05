import React from 'react'

import '../style/Card.scss'


const Card = ({ imageNumber, title }) => {

  const convertToImageNumber = (num) => {
    return String(num).padStart(3, "0")
  }

  const convertToImageName = (num) => {
    return `/resource/Daily%20Challenge%20%23${convertToImageNumber(num)}.png`
  }

  return (
    <>
    <div className='card'>
      <div className="image">
        <img 
          src={convertToImageName(imageNumber)} 
          alt="loading" />
      </div>
      <div className='description'>
        <span className='title'>#{convertToImageNumber(imageNumber)} {title} </span>
      </div>
      
    </div>
    </>
  )
}

export default Card