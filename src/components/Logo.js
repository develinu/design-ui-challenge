import React from 'react'
import { Link } from 'react-router-dom'

import '../style/Logo.scss'


const Logo = () => {
  return (
    <Link to="/" className="noselect">
      <span className="primary">Daily</span> 
      <span className="secondary">UI</span>
    </Link>
  )
}

export default Logo