import React from "react"
import { createGlobalStyle } from "styled-components"
import Wick from "../images/wick.jpg"
import Kylo from "../images/kylo.jpg"
import Slepnac from "../images/slepnac.jpg"
import Joker from "../images/joker.jpg"

import Carousel from "../components/carousel/carousel"

const IndexPage = () => {
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

  return (
    <>
      <Global />
      <Carousel films={films} />
    </>
  )
}

export default IndexPage

const Global = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,900&display=swap");

  * {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }

  body {
    overflow-x: hidden;
    font-size: 15px;
    line-height: 20px; 
    @media (min-width: 1000px) {
      font-size: 23px;
      line-height: 35px;
    }
  }

  h1 {
    font-weight: 900;
    font-size: 23px;
    line-height: 35px;
    @media (min-width: 1000px) {
      font-size: 50px;
      line-height: 55px;
    }
  }
  p {
    opacity: 0.6;
  }
`
