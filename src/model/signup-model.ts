// src/model/signup-model.ts
import { action } from 'easy-peasy' // 👈 import

export interface SignupModel {
  registerationDetails: Array<any>
  signupUser: any
}

const signupModel: SignupModel = {
  registerationDetails: [],
  //  👇 define an action
  signupUser: action((state: any, payload) => {
    state.registerationDetails.push(payload)
  }),
}
export default signupModel
