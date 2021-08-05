import api from './api'

export const getAllEmployees = () => {
  return api.get('employees')
            .then((response) => response.data)
}
