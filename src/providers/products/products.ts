import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  products: any[] = [
    {id: '12121', nome: 'produto01', preco: 1.50},
    {id: '55534', nome: 'produto05', preco: 1.50},
    {id: '989898', nome: 'produto089', preco: 1.50},
    {id: '1212', nome: 'produto04', preco: 1.50},
    {id: '00909', nome: 'produto451', preco: 1.50},
    {id: '23232332', nome: 'produto891', preco: 1.50},
    {id: '670311', nome: 'produto011', preco: 1.50},
    {id: '6546458069', nome: 'produto045', preco: 1.50}
  ]

  constructor() {
    console.log('Hello ProductsProvider Provider');
  }

  getProducts(){
    return this.products;
  }

}
