import { baseUrl } from '../utilities/constants'

// export const getUser = () => {
//   let URL = baseUrl + '/users'
//   fetch(URL)
//     .then((response) => response.json())
//     .then((data: any) => {
//       return data
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }

export const getUser = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
    })
}
