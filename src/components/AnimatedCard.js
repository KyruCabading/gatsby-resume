// from react-spring
// https://codesandbox.io/embed/rj998k4vmm

import React from "react"
import Card from "@material-ui/core/Card"
import Box from "@material-ui/core/Box"
import { useSpring, animated } from "react-spring"

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 150,
  (x - window.innerWidth / 2) / 150,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${-x}deg) rotateY(${-y}deg) scale(${s})`

const AnimatedCard = props => {
  const [spring, springSet] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 0.5, tension: 500, friction: 50 },
  }))
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) =>
        springSet({ xys: calc(x, y) })
      }
      onMouseLeave={() => springSet({ xys: [0, 0, 1] })}
      style={{ transform: spring.xys.interpolate(trans) }}
    >
      {props.children}
    </animated.div>
  )
}

export default AnimatedCard
