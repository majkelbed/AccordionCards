import React, { useState, useRef } from "react"
import styled, { createGlobalStyle } from "styled-components"
import Wick from "../images/wick.jpg"
import Kylo from "../images/kylo.jpg"
import Slepnac from "../images/slepnac.jpg"
import Joker from "../images/joker.jpg"
import {
  useSprings,
  useTransition,
  useSpring,
  useChain,
  animated,
  config,
} from "react-spring"

const IndexPage = () => {
  //STATE
  const films = [
    {
      title: "Gwiezdne wojny: Ostatni Jedi",
      stars: 3,
      thumbnail: Kylo,
      description:
        "Rey odnajduje Luke'a Skywalkera, by namówić go na powrót i walkę z Najwyższym Porządkiem. Tymczasem Rebelianci próbują uciec przed flotą wroga.",
      director: "Rian Johnson",
      date: "9 grudnia 2017",
      boxoffice: "1 332 539 889",
    },
    {
      title: "John Wick 3",
      stars: 5,
      thumbnail: Wick,
      description:
        "John Wick próbuje opuścić Nowy Jork po tym, jak zostaje wydalony z organizacji zabójców za morderstwo członka Najwyższej Rady.",
      director: "Chad Stahelski",
      date: "15 maja 2019",
      boxoffice: "321 728 152",
    },
    {
      title: "Ślepnąc od świateł",
      stars: 4,
      thumbnail: Slepnac,
      description:
        "Perfekcyjnie poukładane życie dilera kokainowego Kuby zmienia się w chaos, gdy z więzienia wychodzi Dario, gangster starej daty.",
      director: "Krzysztof Skonieczny",
      date: "27 października 2018",
      boxoffice: "3 768 100",
    },
    {
      title: "Mroczny Rycerz",
      stars: 5,
      thumbnail: Joker,
      description:
        "Batman, z pomocą porucznika Gordona oraz prokuratora Harveya Denta, występuje przeciwko przerażającemu i nieobliczalnemu Jokerowi, który chce pogrążyć Gotham City w chaosie.",
      director: "Christopher Nolan",
      date: "14 lipca 2008",
      boxoffice: "1 004 558 444",
    },
  ]

  //SPRINGS
  const delay = 400
  const ref = useRef()
  const basicConfig = {
    flex: 1,
    opacity: 0,
    sat: "100%",
    active: "false",
    backgroundPosition: "50% 50%",
  }
  const onHoverConfig = {
    flex: 2,
    opacity: 0,
    sat: "0%",
    active: "false",
    backgroundPosition: "50% 50%",
  }
  const onClickConfig = {
    flex: 6,
    sat: "0%",
    active: "true",
    backgroundPosition: "100% 50%",
    opacity: 1,
  }
  const [springs, setSprings] = useSprings(films.length, () => ({
    ...basicConfig,
    from: basicConfig,
    config,
  }))
  const [transitions, setTransitions] = useSprings(films.length, () => ({
    opacity: 0,
    from: { opacity: 0 },
    delay,
  }))

  //EVENT HANDLERS
  function handleMouseEnter(index) {
    setSprings(i => {
      if (springs[i].active.value === "true") {
        return onClickConfig
      } else if (i === index) {
        return onHoverConfig
      } else {
        return basicConfig
      }
    })
  }
  function handleMouseLeave(index) {
    setSprings(i => {
      if (springs[i].active.value === "true") {
        return onClickConfig
      } else {
        return basicConfig
      }
    })
  }
  function handleClick(index) {
    setSprings(i => {
      if (springs[i].active.value === "true" && i === index) {
        setTransitions(i => ({
          opacity: 0,
        }))
        return { ...onHoverConfig, delay }
      }
      if (i === index) {
        setTransitions(i =>
          i === index ? { opacity: 1, delay } : { opacity: 0 }
        )
        return onClickConfig
      } else {
        return basicConfig
      }
    })
  }
  return (
    <>
      <Global />
      <Flex>
        {springs.map(({ flex, sat, backgroundPosition }, index) => {
          const {
            title,
            description,
            stars,
            director,
            date,
            boxoffice,
            thumbnail,
          } = films[index]
          return (
            <Section
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClick(index)}
              key={index}
              index={index}
              src={thumbnail}
              style={{
                flex,
                filter: sat.interpolate(value => `grayscale(${value})`),
                backgroundPosition,
              }}
            >
              <Info style={transitions[index]}>
                <h1>{title}</h1>
                <h3>{stars}</h3>
                <p>{description}</p>
                <div>{director}</div>
                <div>{date}</div>
                <div>{boxoffice}</div>
              </Info>
            </Section>
          )
        })}
      </Flex>
    </>
  )
}

export default IndexPage
const Flex = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`
const StyledSection = styled.div`
  flex: 1;
  height: 100%;
  background: ${({ src }) => `url(${src})`} no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`
const Section = animated(StyledSection)

const StyledInfo = styled.div`
  max-width: 45%;
  color: white;
  font-size: 22px;
`
const Info = animated(StyledInfo)

const Global = createGlobalStyle`
  * {
  margin:0;
  padding:0;
  }
  body {
  overflow:hidden;
  }
`
