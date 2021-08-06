import { formatAdmissionDate, fomartPhoneNumber, thisEmployeeExists} from './employee'

describe('Function to Format the Admission Date', () => {
  test('Sending a correct date from database', () => {

    const rawDate = '2021-03-01T00:00:00.000Z'
    const formatedDate = formatAdmissionDate(rawDate)
    expect(formatedDate).toBe('01/03/2021')
  })

  test('Sending a date without the hour', () => {

    const rawDate = '2021-03-01'
    const formatedDate = formatAdmissionDate(rawDate)
    expect(formatedDate).toBe('01/03/2021')
  })

  test('Sending a formated date ', () => {

    const rawDate = '03/01/2021'
    const formatedDate = formatAdmissionDate(rawDate)
    expect(formatedDate).toBe('01/03/2021')
  })
})

describe('Function to Format the Phone Number', () => {
  test('Sending a phone number with 8 digits', () => {

    const rawPhoneNumber = '552199226655'
    const formatedPhoneNumber = fomartPhoneNumber(rawPhoneNumber)
    expect(formatedPhoneNumber).toBe('+55 (21) 9922-6655')
  })
  
  test('Sending a phone number with 9 digits', () => {

    const rawPhoneNumber = '5521999226655'
    const formatedPhoneNumber = fomartPhoneNumber(rawPhoneNumber)
    expect(formatedPhoneNumber).toBe('+55 (21) 99922-6655')
  })
})

describe('Function to Verify if the employee match with the text inputed by client', () => {

  const employee = {
    id: 8,
    name: "João",
    job: "Back-end",
    admissionDate: "2021-03-01T00:00:00.000Z",
    phone: "5551234567890",
    image: "https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png"
  }

  test('Sending a matched employee with inputed text', () => {

    const inputedText = 'Jo'
    const returnedEmployee = thisEmployeeExists(employee, inputedText)
    expect(returnedEmployee).toBe(employee)
  })

  test('Sending an incorrect employee that dont match with inputed text', () => {

    const inputedText = 'Maria'
    const returnedEmployee = thisEmployeeExists(employee, inputedText)
    expect(returnedEmployee).toBe(null)
  })

  test('Sending an inputed text with special character that match with the employee', () => {

    const inputedText = 'joão'
    const returnedEmployee = thisEmployeeExists(employee, inputedText)
    expect(returnedEmployee).toBe(employee)
  })
})
