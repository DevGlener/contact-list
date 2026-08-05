import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;
  max-width: 608px;
  width: 100%;
`

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`

export const StyledInput = styled.input`
  width: 100%;
  height: 46px;
  background-color: #f2f3ff;
  padding-left: 42px;
  color: #717784;
  border: 1px solid #ccc;
  border-radius: 999px;
  outline: none;
  border: none;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
  }
`

type InputProps = {
  placeholder: string
  type: string
  icon: string
}

export function Input({ placeholder, type, icon }: InputProps) {
  return (
    <InputContainer>
      <Icon src={icon} alt="Ícone" />
      <StyledInput placeholder={placeholder} type={type} />
    </InputContainer>
  )
}
