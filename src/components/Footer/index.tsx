import { FooterBar, LegalText, Logo, SocialIcon, SocialList } from './styles'

import logo from '../../assets/images/logo_eFood.png'

import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <FooterBar>
    <Logo src={logo} alt="efood" />

    <SocialList aria-label="Redes sociais">
      <li>
        <a href="https://www.instagram.com" aria-label="Instagram">
          <SocialIcon src={instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com" aria-label="Facebook">
          <SocialIcon src={facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com" aria-label="Twitter">
          <SocialIcon src={twitter} alt="Twitter" />
        </a>
      </li>
    </SocialList>

    <LegalText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </LegalText>
    <br />
    <p>{currentYear} - &copy; E-Food Todos os direitos reservados</p>
  </FooterBar>
)

export default Footer
