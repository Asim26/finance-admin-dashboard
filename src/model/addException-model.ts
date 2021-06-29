// src/model/addException-model.ts
import { action } from 'easy-peasy' // 👈 import

export interface AddExceptionModel {
  exception: Array<any>
  addException: any
}

const addExceptionModel: AddExceptionModel = {
  exception: [],
  //  👇 define an action
  addException: action((state: any, payload) => {
    state.exception.push(payload)
  }),
}
export default addExceptionModel
