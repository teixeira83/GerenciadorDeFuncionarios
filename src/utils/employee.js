export const formatAdmissionDate = (employeeAdmissionDate) => {
  const rawAdmissionDate = employeeAdmissionDate
  const formatedAdmissionDate = new Date(rawAdmissionDate)
                                    .toLocaleDateString('pt-BR', {timeZone: 'UTC'})
  return formatedAdmissionDate                        
}

export const fomartPhoneNumber = (employeePhoneNumber) => {
  const rawEmployeePhoneNumber = employeePhoneNumber
  const countryCode = rawEmployeePhoneNumber.substring(0,2)
  const dDD = rawEmployeePhoneNumber.substring(2,4)
  let firstPartOfPhoneNumber = ''
  let secondPartOfPhoneNumber = ''

  if(rawEmployeePhoneNumber.length === 12) {
    firstPartOfPhoneNumber = rawEmployeePhoneNumber.substring(4, 8)
    secondPartOfPhoneNumber = rawEmployeePhoneNumber.substring(8, rawEmployeePhoneNumber.length)
  } else {
    firstPartOfPhoneNumber = rawEmployeePhoneNumber.substring(4, 9)
    secondPartOfPhoneNumber = rawEmployeePhoneNumber.substring(9, rawEmployeePhoneNumber.length)
  }

  const formatedPhoneNumber = `+${countryCode} (${dDD}) ${firstPartOfPhoneNumber}-${secondPartOfPhoneNumber}`

  return formatedPhoneNumber
}

export const thisEmployeeExists = (employee, textToSearch) => {
  
  if(textToSearch === '') return employee
  
  const employeeNameWithouSpecialCharacters = employee.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  const employeeNameInLowerCase = employeeNameWithouSpecialCharacters.toLowerCase()
  const employeeJobInLowerCase = employee.job.toLowerCase()
  const textToSearchWithoutSpecialCharacters = textToSearch.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  const textToSearchInLowerCase = textToSearchWithoutSpecialCharacters.toLowerCase()
  
  return employeeNameInLowerCase.includes(textToSearchInLowerCase) || 
          employeeJobInLowerCase.includes(textToSearchInLowerCase) ?
          employee : null
}
