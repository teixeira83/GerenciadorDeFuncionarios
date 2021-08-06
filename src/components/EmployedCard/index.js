import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getAllEmployees } from '../../services/employed'
import { fomartPhoneNumber, formatAdmissionDate, thisEmployeeExists} from '../../utils/employee'
import colors from '../../assets/styles/colors'

const Card = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;


  @media(min-width: 600px) {
    display: none;
  }
`

const EmployeeImage = styled.img`
  width: 50px;
  height: 49px;
  border-radius: 30px;
`

const EmployedContent = styled.div`
  background-color: #FFFFFF;
  width: 80%;
  margin: 20px auto;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1em grey;
`

const ContentTitle = styled.span`
  display: inline;
  width: 100%;
  height: 20px;

  :first-child {
    font-weight: bold;
    width: 40%;
  }

  :last-child {
    font-weight: lighter;
    font-size: 14px;
    text-align: center;
    padding-top: 4px;
  }
`

const EmployedName = styled.h3`
  color: ${colors.secondary};
  margin: 10px 0;
`

const TitleContainer = styled.div`
  display: flex;
  width: 75%;
  align-items: center;
  margin: 10px auto;
`

const EmployedCard = ({textToSearch}) => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    (async () => {
      const employeesResponse = await getAllEmployees();
      setEmployees(employeesResponse)
    })()
  }, [])

  return (
    <Card>
      {employees.filter((employee) => thisEmployeeExists(employee, textToSearch)).map((employee) => {
          const formatedAdmissionDate = formatAdmissionDate(employee.admission_date)
          const formatedPhoneNumber = fomartPhoneNumber(employee.phone)
          return (
            <EmployedContent key={employee.id}>
              <EmployeeImage src={employee.image} alt='Foto do Funcionário' />
              <EmployedName>{employee.name}</EmployedName>
              <TitleContainer>
                <ContentTitle>Cargo:</ContentTitle> 
                <ContentTitle>{employee.job}</ContentTitle>
              </TitleContainer>
              <TitleContainer>
                <ContentTitle>Admissão:</ContentTitle>
                <ContentTitle>{formatedAdmissionDate}</ContentTitle>
              </TitleContainer>
              <TitleContainer>
                <ContentTitle>Telefone:</ContentTitle> 
                <ContentTitle>{formatedPhoneNumber}</ContentTitle>
              </TitleContainer>
            </EmployedContent>
          )})}
    </Card>
  )
}

export default EmployedCard;