import styled from 'styled-components'
import colors from '../../assets/styles/colors'
import { BiSearchAlt2 } from 'react-icons/bi'

const Input = styled.input`
  height: 40px;
  width: 65vw;
  padding: 5px 10px;
  margin-right: 32px;
  background: #FFFFFF;
  border: 1px solid #CDCDCD;
  border-radius: 4px;
  font-family: 'Roboto';
  font-size: 16px;
  color: ${colors.primary};
` 

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  & > .icon {
    position: absolute;
    padding-right: 50px;
    color: #7D7D7D;
  }
`
const SearchInput = (props) => {
  return (
    <Container>
      <Input 
        type='text'
        placeholder='Pesquisar' 
        value={props.value}
        onChange={props.onChange} 
      />
      <BiSearchAlt2 className='icon'/>
    </Container>
    
  )
}

export default SearchInput;