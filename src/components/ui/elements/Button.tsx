import styled from 'styled-components'

const NewButton = styled.button`
  background-color: #4d9bff;
  color: white;
  border-radius: 999px;
  width: 154px;
  height: 40px;
  border: none;
`
function Button() {
  return (
    <>
      <NewButton>+ Novo Contato</NewButton>
    </>
  )
}
export default Button
