import { useEffect, useState } from 'react'
import styled from 'styled-components'
import colors from '../../assets/styles/colors'
import gaps from '../../assets/styles/gaps'
import { getAllEmployees } from '../../services/employed'

const Container = styled.div`
  width: 93.75%;
  display: flex;
  margin: ${gaps.medium} auto;
`

const Table = styled.table`
  width: 100%;
  font-size: 16px;
  border-collapse: collapse;
`
const TableHead = styled.thead`
  background-color: ${colors.secondary};
  color: #FFFFFF;
  height: ${gaps.big};
  
  & tr {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  }
`
const TableBody = styled.tbody`
  width: 100%;
  height: 100vh;
  & tr {
    height: 50px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  }
  
  & > tr > td {
    padding: 0px;
    text-align: center; 
    vertical-align: middle;
  }
`

const EmployeeImage = styled.img`
  width: 34px;
  height: 33px;
  border-radius: 30px;
`

const EmployedTable = () => {
  const [employees, setEmployees] = useState([])
  
  useEffect(() => {
    (async () => {
      const employeesResponse = await getAllEmployees();
      setEmployees(employeesResponse)
    })()
  }, [])

  return (
    <Container>
      <Table>
        <TableHead>
          <tr>
            <th>Foto</th>  
            <th>Nome</th>  
            <th>Cargo</th>  
            <th>Data de Admissão</th>  
            <th>Telefone</th>  
          </tr>
        </TableHead>
        <TableBody>
        {employees.map((employee) => {
          const rawAdmissionDate = employee.admission_date
          const formatedAdmissionDate = new Date(rawAdmissionDate)
                                            .toLocaleDateString('pt-BR', {timeZone: 'UTC'})
          return (
            <tr key={employee.id}>
              <td>{<EmployeeImage src={employee.image} alt='Foto do Funcionário' />}</td>
              <td>{employee.name}</td>
              <td>{employee.job}</td>
              <td>{formatedAdmissionDate}</td>
              <td>{employee.phone}</td>
            </tr> 
          )})}
        </TableBody>
      </Table>
    </Container>
  )
}

export default EmployedTable;