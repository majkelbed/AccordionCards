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
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
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
