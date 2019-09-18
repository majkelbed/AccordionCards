import React, { useState, useRef, useEffect } from "react"
import {
  useSpring,
  config,
  animated,
  useTransition,
  useChain,
} from "react-spring"
import { StyledInfo, StyledSection, Grid } from "./section-ui"
import {
  delay,
  basicConfig,
  onHoverConfig,
  onClickConfig,
  openConfig,
  closedConfig,
} from "./section-configs"
import Star from "../../images/star"

const AnimatedSection = animated(StyledSection)
const Info = animated(StyledInfo)

const Section = ({ film, currentOpenState, index, mobile }) => {
  const {
    title,
    thumbnail,
    description,
    stars,
    director,
    date,
    boxoffice,
  } = film
  const [currentOpen, setCurrentOpen] = currentOpenState
  const springRef = useRef()
  const transitionRef = useRef()
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (currentOpen !== index && currentOpen !== -1) {
      setOpen(false)
    }
  }, [currentOpen])

  const spring = useSpring({
    ref: springRef,
    config: config.slow,
    from: basicConfig,
    to: open ? onClickConfig : hover ? onHoverConfig : basicConfig,
  })
  const transition = useTransition(open, null, {
    enter: openConfig,
    leave: closedConfig,
    from: closedConfig,
    ref: transitionRef,
    config: config.gentle,
  })
  useChain(open ? [springRef, transitionRef] : [transitionRef, springRef], [
    0,
    0.7,
  ])

  function handleMouseEnter() {
    setHover(true)
  }
  function handleMouseLeave() {
    setHover(false)
  }
  function handleClick() {
    if (currentOpen === index) {
      setCurrentOpen(-1)
      setOpen(!open)
    } else if (currentOpen === -1) {
      setCurrentOpen(index)
      setOpen(!open)
    } else {
      setCurrentOpen(index)
      setTimeout(() => setOpen(!open), 2 * delay)
    }
  }

  function renderStars(count) {
    let result = []
    for (let index = 0; index < count; index++) {
      result.push(<Star key={index + "fill"} fill="#B6FF0E" stroke="#B6FF0E" />)
    }
    for (let index = 0; index < 5 - count; index++) {
      result.push(<Star key={index + "empty"} fill="none" stroke="#B6FF0E" />)
    }
    return result
  }

  if (mobile) {
    return (
      <AnimatedSection src={thumbnail}>
        <Info>
          <h1>{title}</h1>
          {renderStars(stars)}
          <p>{description}</p>
          <Grid>
            <span>Director:</span>
            <span>{director}</span>
            <span>In Theaters:</span>
            <span>{date}</span>
            <span>Boxoffice:</span>
            <span>{boxoffice}</span>
          </Grid>
        </Info>
      </AnimatedSection>
    )
  } else {
    return (
      <AnimatedSection
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleClick()}
        src={thumbnail}
        style={{
          ...spring,
          filter: spring.sat.interpolate(sat => `grayscale(${sat})`),
        }}
      >
        {transition.map(
          ({ item, key, props }) =>
            item && (
              <Info key={key} style={props}>
                <h1>{title}</h1>
                {renderStars(stars)}
                <p>{description}</p>
                <Grid>
                  <span>Director:</span>
                  <span>{director}</span>
                  <span>In Theaters:</span>
                  <span>{date}</span>
                  <span>Boxoffice:</span>
                  <span>{boxoffice}</span>
                </Grid>
              </Info>
            )
        )}
      </AnimatedSection>
    )
  }
}

export default Section
