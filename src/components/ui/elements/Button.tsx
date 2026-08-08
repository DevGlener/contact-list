import styled from 'styled-components'

const NewButton = styled.button`
  background-color: #4d9bff;
  color: white;
  border-radius: 999px;
  width: 154px;
  height: 40px;
  border: none;
  cursor: pointer;
`

type ButtonProps = {
  text: string
  onClick?: () => void
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <>
      <NewButton onClick={onClick}>{text}</NewButton>
    </>
  )
}
export default Button
