// src/model/index.ts

import productsModel from './products-model'
import { ProductsModel } from './products-model'
import basketModel from './basket-model'
import { BasketModel } from './basket-model'
import userModel from './user-model'
import { UserModel } from './user-model'
import signupModel, { SignupModel } from './signup-model'
import { exception } from 'console'
import addExceptionModel, { AddExceptionModel } from './addException-model'

export interface Model {
  products: ProductsModel
  basket: BasketModel
  user: UserModel
  signup: SignupModel
  exception: AddExceptionModel
}

const storeModel: Model = {
  products: productsModel,
  basket: basketModel,
  user: userModel,
  signup: signupModel,
  exception: addExceptionModel,
}

export default storeModel
