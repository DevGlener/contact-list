import Button from '../../components/ui/elements/Button'
import Filter from '../../components/ui/elements/Filter'
import Card from '../../components/ui/elements/Card'
import * as S from './style'

function Container() {
  return (
    <S.Main>
      <S.Aside>
        <Filter />
        <Button />
      </S.Aside>
      <S.Section>
        <Card
          nome={'Ana Silva'}
          status={'trabalho'}
          text={'ana.moraes@empresa.com'}
          contact={'(00) 00000-0000'}
        />
        <Card
          nome={'Teo Oliveira'}
          status={'Familia'}
          text={'teo.oliveira@empresa.com'}
          contact={'(00) 00000-0000'}
        />
        <Card
          nome={'Julio Barbosa'}
          status={'amigo'}
          text={'julio.barbosa@empresa.com'}
          contact={'(00) 00000-0000'}
        />
      </S.Section>
    </S.Main>
  )
}

export default Container
