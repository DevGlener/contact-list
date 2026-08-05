import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 64px 20px;
`
export const Aside = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
`
