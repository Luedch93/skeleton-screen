import React from 'react'

import './Card.scss'

const Card = ({picture="", title="", text="", actions=[]}) => {
  const imageStyles = {
    backgroundImage: `url(${picture})`, 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat' ,
    backgroundSize: 'cover'
  }
  return (
    <div className="Card">
      <div className="pictureCont">
        {picture && <div className="picture" style={imageStyles}></div>}
      </div>
      <div className="body">
        {title && text && 
        <p>
          <h4>{title}</h4>
          <p>{text}</p>
        </p>}
      </div>
    </div>
  )
}

export default Card