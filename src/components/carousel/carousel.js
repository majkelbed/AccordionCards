import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Section from "../section/section"
const Carousel = ({ films }) => {
  const currentOpenState = useState(-1)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const setWhenMobile = innerWidth => {
      innerWidth > 1000 ? setMobile(false) : setMobile(true)
    }
    const handleResize = e => setWhenMobile(e.target.innerWidth)

    setWhenMobile(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Flex>
      {films.map((film, index) => (
        <Section
          currentOpenState={currentOpenState}
          key={film.title + film.date}
          index={index}
          film={film}
          mobile={mobile}
        />
      ))}
    </Flex>
  )
}

export default Carousel

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  height: 150vh;
  width: 100vw;
  @media (min-width: 1000px) {
    flex-direction: row;
    height: 100vh;
  }
`
