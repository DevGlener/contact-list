import { useState } from 'react'
import Button from '../../components/ui/elements/Button'
import Filter from '../../components/ui/elements/Filter'
import Card from '../../components/ui/elements/Card'
import * as S from './style'
import contatosData from '../../data/contatos.json'

type Contato = {
  id: number
  nome: string
  email: string
  telefone: string
  status: string
  avatar: string
}

function Container() {
  const [contatos, setContatos] = useState<Contato[]>([])

  const toggle = () => {
    if (contatos.length > 0) {
      setContatos([])
    } else {
      setContatos(contatosData)
    }
  }

  const estaVisivel = contatos.length > 0

  return (
    <S.Main>
      <S.Aside>
        <Filter />
        <div>
          <Button text="+ Novo Contato" />
          <Button
            text={estaVisivel ? 'Fechar Contatos' : 'Carregar Contatos'}
            onClick={toggle}
          />
        </div>
      </S.Aside>
      <S.Section>
        {contatos.length >= 0 ? (
          contatos.map((contatos) => (
            <Card
              key={contatos.id}
              avatar={contatos.avatar}
              nome={contatos.nome}
              status={contatos.status}
              text={contatos.email}
              contact={contatos.telefone}
            />
          ))
        ) : (
          <S.Empty>
            <h2>Nenhum contato encontrado</h2>
            <p>Adicione um novo contato para começar sua lista.</p>
          </S.Empty>
        )}
      </S.Section>
    </S.Main>
  )
}

export default Container
