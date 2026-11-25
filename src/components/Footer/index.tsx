import Logo from '../Logo'
import { SocialLinks } from '../../utils/list'
import logo_efood from '../../assets/images/logo_eFood.png'

import { FooterContainer, SocialIcons, Text } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <FooterContainer>
      <Logo kind="link" cover={logo_efood} title="Logo eFood" to="/" />

      <SocialIcons>
        {SocialLinks.map((item) => (
          <img src={item.icon} alt={item.title} key={item.id} />
        ))}
      </SocialIcons>

      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Text>
      <p>{currentYear} - &copy; E-Food Todos os direitos reservados</p>
    </FooterContainer>
  )
}
export default Footer
