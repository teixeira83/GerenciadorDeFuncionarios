import { useEffect, useState } from 'react'
import styled from 'styled-components'
import colors from '../../assets/styles/colors'
import gaps from '../../assets/styles/gaps'
import { getAllEmployees } from '../../services/employed'
import { fomartPhoneNumber, formatAdmissionDate, thisEmployeeExists} from '../../utils/employee'

const Container = styled.div`
  width: 93.75%;
  display: flex;
  margin: ${gaps.medium} auto;

  @media(max-width: 600px) {
    display: none;
  }
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
  background-color: #FFFFFF;
  
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

const EmployedTable = ({textToSearch}) => {
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
        {employees.filter((employee) => thisEmployeeExists(employee, textToSearch)).map((employee) => {
          const formatedAdmissionDate = formatAdmissionDate(employee.admission_date)
          const formatedPhoneNumber = fomartPhoneNumber(employee.phone)
          return (
            <tr key={employee.id}>
              <td>{<EmployeeImage src={employee.image} alt='Foto do Funcionário' />}</td>
              <td>{employee.name}</td>
              <td>{employee.job}</td>
              <td>{formatedAdmissionDate}</td>
              <td>{formatedPhoneNumber}</td>
            </tr> 
          )})}
        </TableBody>
      </Table>
    </Container>
  )
}

export default EmployedTable;