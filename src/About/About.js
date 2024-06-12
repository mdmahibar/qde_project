import React from 'react';
import '../About/About.css';
import { useSpring,animated } from '@react-spring/web'

const About = () => {
  // const spring = useSpring({from: { x:-100}, to: {x:0}})
  const [spring, api] = useSpring(() => ({from: {x:0}}));
  const clickHandler = () => {
    api.start({from: {x:-100}, to: {x:0}})
  }

  return (
    <animated.div className='about'
      onClick={clickHandler}
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...spring
      }}
    />
  )
}

export default About