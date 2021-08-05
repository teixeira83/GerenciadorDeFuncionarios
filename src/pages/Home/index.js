import { useState } from 'react'
import styled from 'styled-components'
import gaps from '../../assets/styles/gaps'
import { SearchInput } from '../../components'

const Title = styled.h2`
  font-size: 24px;
  margin-top: ${gaps.medium};
  margin-left: ${gaps.medium};
`

const Home = () => {
  const [text, setText] = useState('')

  return (
    <>
      <Title>Funcionários</Title>
      <SearchInput value={text} onChange={e=> setText(e.target.value)} />
    </>
  )  
}

export default Home;