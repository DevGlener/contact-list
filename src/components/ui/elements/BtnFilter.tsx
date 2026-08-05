import styled from 'styled-components'

const P = styled.p<{ ativo?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 30px;
  border: 1px solid ${(props) => (props.ativo ? '#4D9BFF' : '#e5e7eb')};
  background-color: ${(props) => (props.ativo ? '#D5E3FF' : '#fff')};
  color: ${(props) => (props.ativo ? '#005EB1' : '#414752')};
  font-size: 14px;
  border-radius: 999px;
  cursor: pointer;
`
type BtnFilterProps = {
  text?: string
  ativo?: boolean
  // onClick: () => void
}

export function BtnFilter({ text, ativo }: BtnFilterProps) {
  return <P ativo={ativo}>{text}</P>
}
export default BtnFilter
