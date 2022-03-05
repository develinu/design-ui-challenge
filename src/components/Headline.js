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
          Daily UI Challenge는 매일 하나의 디자인 요구사항을 받아 총 100회 수행하는 챌린지입니다.          
        </p>
        <p>
          일정을 완벽하게 지키진 못했지만 꾸준히해서 100회를 달성한 것에 큰 의미가 있었습니다.
        </p>
      </div>
    </div>
  )
}

export default Headline