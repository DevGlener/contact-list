import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 44px 20px;
  height: 70vh;
`
export const Aside = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  div {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`
export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 30px 0;
  row-gap: 20px;
  overflow-x: hidden;
`
export const Empty = styled.div``
