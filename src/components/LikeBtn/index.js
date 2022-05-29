import React from 'react'
import styles from './index.css'

export const LikeBtn = () => {

  const [wobble, setWobble] = React.useState(0)
  
  return (
    <img
      className="image"
      src='https://img.icons8.com/external-justicon-lineal-color-justicon/344/external-like-notifications-justicon-lineal-color-justicon.png'
      alt="randomised!"
      onClick={() => setWobble(1)}
      onAnimationEnd={() => setWobble(0)}
      wobble={wobble}
    />
  )
}
