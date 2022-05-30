import React from 'react'
import './index.css'

export const ImgEffect = props => {

  const [wobble, setWobble] = React.useState(0)
  
  return (
    <img
      className={props.info.classes}
      src={props.info.url}
      alt="randomised!"
      onClick={() => setWobble(1)}
      onAnimationEnd={() => setWobble(0)}
      wobble={wobble}
    />
  )
}


