import styled from "styled-components"
export const StyledSection = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  background: ${({ src }) => `url(${src})`} no-repeat;
  background-position: center left;
  background-size: cover;
  @media (min-width: 1000px) {
    background-position: center;
  }
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const TitleBar = styled.div`
  position: relative;
  color: #b6ff0e;
  writing-mode: vertical-lr;
  font-weight: 900;
  align-self: flex-end;
  transform: rotate(180deg);
  margin: 0.5em 0;
  :after {
    content: "";
    display: block;
    position: absolute;
    top: 102%;
    left: 50%;
    width: 1px;
    height: 100vh;
    background: white;
    opacity: 0.3;
  }
`
export const StyledInfo = styled.div`
  max-width: 100%;
  padding: 1em;
  background: rgba(0, 0, 0, 0.6);
  @media (min-width: 1000px) {
    background: none;
    max-width: 45%;
    padding: 0;
  }
  color: white;
  > * {
    margin: 8px 0;
  }
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  justify-items: flex-start;
  align-items: center;
`
