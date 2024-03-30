import { FormularioVagas, BotaoPesquisarVagas, CampoInput } from './style'
import { FormEvent, useState } from 'react'

// import styles from './FormVagas.module.css'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormularioVagas onSubmit={aoEnviarForm}>
      <CampoInput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoPesquisarVagas type="submit">Pesquisar</BotaoPesquisarVagas>
    </FormularioVagas>
  )
}
export default FormVagas
