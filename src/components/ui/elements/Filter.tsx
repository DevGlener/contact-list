import { useState } from 'react'
import styled from 'styled-components'
import BtnFilter from './BtnFilter'

function Filter() {
  const [selecionado, setSelecionado] = useState('todos')

  return (
    <ContainerList>
      <p>Filtrar por :</p>
      <Ul>
        <li>
          <BtnFilter
            text="Tudo"
            ativo={selecionado === 'todos'}
            onClick={() => setSelecionado('todos')}
          />
        </li>
        <li>
          <BtnFilter
            text="Favoritos"
            ativo={selecionado === 'Favoritos'}
            onClick={() => setSelecionado('Favoritos')}
          />
        </li>
        <li>
          <BtnFilter
            text="Nome"
            ativo={selecionado === 'Nome'}
            onClick={() => setSelecionado('Nome')}
          />
        </li>
        <li>
          <BtnFilter
            text="E-mail"
            ativo={selecionado === 'E-mail'}
            onClick={() => setSelecionado('E-mail')}
          />
        </li>
        <li>
          <BtnFilter
            text="Telefone"
            ativo={selecionado === 'Telefone'}
            onClick={() => setSelecionado('Telefone')}
          />
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
