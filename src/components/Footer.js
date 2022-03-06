import React from 'react'

import '../style/Footer.scss'


const Footer = () => {
  return (
    <footer>
      <div className='noselect'>
        <span> @{new Date().getFullYear()} </span>
        <span> Created by </span>
        <span className='name'> devinu </span>
      </div>
    </footer>
  )
}

export default Footer