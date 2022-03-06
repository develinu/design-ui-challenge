import React from 'react'

import '../style/ImageView.scss'


const ImageView = ({ match, history }) => {

  const imageNumber = match.params.id

  const convertToImageNumber = (num) => {
    return String(num).padStart(3, "0")
  }

  const convertToImageName = (num) => {
    return `/resource/Daily%20Challenge%20%23${convertToImageNumber(num)}.png`
  }

  return (
    <div 
      className='image-view-container'
      onClick={ () => { history.push('/') } }>
        <div className="image-view">
          <img 
            className='image noselect'
            src={convertToImageName(imageNumber)}
            alt="loading"
            onClick={ e => {
              e.stopPropagation();
            }}/>
        </div>
    </div>
  )
}

export default ImageView