import styled from 'styled-components'
import BtnFilter from './BtnFilter'

function Filter() {
  return (
    <ContainerList>
      <p>Filtrar por :</p>
      <Ul>
        <li>
          <BtnFilter text="Tudo" ativo />
        </li>
        <li>
          <BtnFilter text="Favoritos" />
        </li>
        <li>
          <BtnFilter text="Nome" />
        </li>
        <li>
          <BtnFilter text="E-mail" />
        </li>
        <li>
          <BtnFilter text="Telefone" />
        </li>
      </Ul>
    </ContainerList>
  )
}

export default Filter

const ContainerList = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Ul = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`
