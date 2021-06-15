// src/model/user-model.ts
import { getUser } from '../services/dataService'
import { action } from 'easy-peasy' // 👈 import

export interface UserModel {
  usersData: Array<any>
  apiUsers: any
}

const userModel: UserModel = {
  usersData: [],
  //   users: getUser(),
  //  👇 define an action
  apiUsers: action((state: any, payload) => {
    state.usersData.push(payload)
  }),
}
export default userModel
