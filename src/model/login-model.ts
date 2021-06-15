// src/model/login-model.ts
import { action } from 'easy-peasy' // 👈 import

export interface LoginModel {
  loginCred: Array<any>
  login: any
}

const loginModel: LoginModel = {
  loginCred: [],
  //  👇 define an action
  login: action((state: any, payload) => {
    state.loginCred.push(payload)
  }),
}
export default loginModel
