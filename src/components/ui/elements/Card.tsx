import styled from 'styled-components'
import { formatPhone } from '../../../utils/Mask'
import {
  iconContact,
  iconEdit,
  iconEmail,
  iconFavorite,
  iconTrash,
  selfie,
} from '../../../assets'

const NewButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  width: 592px;
  height: 284px;
  border: 1px solid #e5e7eb;
  border-radius: 16px; // fim container
`

// header -------------------------------------------------------
const HeaderCard = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;

  img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
  }
`
const HeaderText = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: start;
  span {
    background-color: #d5e3ff;
    color: #005eb1;
    text-align: center;
    width: 78px;
    height: 20px;
    border-radius: 999px;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  h3 {
    color: #131b2e;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
`
// section ------------------------------------------------------
const SectionCard = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  p {
    color: #414752;
  }
`
const Name = styled.div`
  display: flex;
  gap: 0 20px;
  color: red;
`
const Tel = styled.div`
  display: flex;
  color: red;
  gap: 0 20px;
`
// footer ---------------------------------------------------------
const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 30px;
`
const OptionsCard = styled.div`
  display: flex;
  gap: 16px;
`

type Props = {
  avatar?: string
  nome: string
  status: string
  text: string
  contact: string
}

function Card({ status, nome, text, contact }: Props) {
  return (
    <NewButton>
      <HeaderCard>
        <img src={selfie} alt={text} />
        <HeaderText>
          <h3>{nome}</h3>
          <span>{status}</span>
        </HeaderText>
      </HeaderCard>
      <SectionCard>
        <Name>
          <img src={iconEmail} alt={text} />
          <p>{text}</p>
        </Name>
        <Tel>
          <img src={iconContact} alt={text} />
          <p>{formatPhone(contact)}</p>
        </Tel>
      </SectionCard>
      <FooterCard>
        <OptionsCard>
          <img src={iconEdit} alt={text} />
          <img src={iconContact} alt={text} />
          <img src={iconFavorite} alt={text} />
        </OptionsCard>
        <img src={iconTrash} alt={text} />
      </FooterCard>
    </NewButton>
  )
}
export default Card
