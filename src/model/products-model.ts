// src/model/products-model.ts
export interface ProductsModel {
  items: Array<any>
}

const productsModel = {
  items: [
    { id: 1, name: 'Broccoli', price: 2.5 },
    { id: 2, name: 'Carrots', price: 42 },
  ],
}
export default productsModel
