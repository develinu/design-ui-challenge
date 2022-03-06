import React from 'react'
import { NavLink } from 'react-router-dom'

import '../style/TopNav.scss'
import { githubRepository } from '../data/nav'


const TopNav = () => {

  const moveToGithub = () => {
    window.location.href = githubRepository
  }

  return (
    <div className="top-nav">
      <div 
        className="github"
        onClick={moveToGithub}>
        <img src="/github.png" alt="github" />
      </div>
    </div>
  )
}

export default TopNav