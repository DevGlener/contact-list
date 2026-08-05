import { Input } from '../../components/ui/elements/Input'
import serachIcon from '../../assets/icon-search.svg'
import { Nav, H1 } from './style'

function Header() {
  return (
    <Nav>
      <H1>Lista de Contatos</H1>
      <Input placeholder="Pesquisar..." type="text" icon={serachIcon} />
    </Nav>
  )
}
export default Header
