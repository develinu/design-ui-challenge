import React from 'react'
import { Link } from 'react-router-dom'

import '../style/Logo.scss'


const Logo = () => {
  return (
    <div className='logo noselect'>
      <span className="primary">Daily</span> 
      <span className="secondary">UI</span>
    </div>
  )
}

export default Logo