import React from 'react'

import '../style/Headline.scss'


const Headline = () => {
  return (
    <div className="headline">
      <h1>
        <span className="primary">Daily UI Challenge 100</span><br />
      </h1>
      <div className="description">
        <p>
          This page is the last homework assignment for the GPD React Study.
        </p>
      </div>
    </div>
  )
}

export default Headline