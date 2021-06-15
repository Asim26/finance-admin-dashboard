// src/model/basket-model.ts
import { action } from 'easy-peasy' // 👈 import

export interface BasketModel {
  productIds: Array<any>
  addProduct: any
}

const basketModel: BasketModel = {
  productIds: [2],
  //  👇 define an action to add a product to basket
  addProduct: action((state: any, payload) => {
    state.productIds.push(payload)
  }),
}

export default basketModel
