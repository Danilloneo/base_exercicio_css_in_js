import styled from 'styled-components'
import { colors } from '../../styles'

export const FormularioVagas = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const BotaoPesquisarVagas = styled.button`
  background-color: ${colors.corPrincipal};
  border: 1px solid ${colors.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${colors.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`
export const CampoInput = styled.input`
  padding: 0 16px;
  outline-color: ${colors.corPrincipal};
`
