import { useState } from 'react'
import styled from 'styled-components'
import gaps from '../../assets/styles/gaps'
import { SearchInput, EmployedTable, EmployedCard } from '../../components'

const Title = styled.h2`
  font-size: 24px;
  margin-top: ${gaps.medium};
  margin-left: ${gaps.medium};
`

const SearchContainer = styled.div`
  display: flex;
  margin-top: ${gaps.small};
`

const Home = () => {
  const [text, setText] = useState('')

  return (
    <main>
      <SearchContainer>
        <Title>Funcionários</Title>
        <SearchInput value={text} onChange={e=> setText(e.target.value)} />
      </SearchContainer>
      <EmployedCard textToSearch={text} />
      <EmployedTable textToSearch={text} /> 
    </main>   
  )  
}

export default Home;