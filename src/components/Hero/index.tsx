import { Container } from '../../styles'
// import styles from './Hero.module.css'
import { FormularioHero, TituloHero } from './style'

const Hero = () => (
  <FormularioHero>
    <Container>
      <TituloHero>
        As melhores vagas para tecnologia, design e artes visuais.
      </TituloHero>
    </Container>
  </FormularioHero>
)

export default Hero
