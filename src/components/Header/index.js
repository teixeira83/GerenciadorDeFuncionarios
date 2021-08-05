import logo from '../../assets/imgs/logo.svg'
import styled from 'styled-components'
import colors from '../../assets/styles/colors'
import gaps from '../../assets/styles/gaps'

const HeaderContainer = styled.header`
  background-color: ${colors.primary};
  height: 60px;
  display: flex;
  justify-content: left;
  align-items: center;
`

const Logo = styled.img`
  height: 35px;
  margin-left: ${gaps.medium};
`

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} />
    </HeaderContainer>
  )
}

export default Header;