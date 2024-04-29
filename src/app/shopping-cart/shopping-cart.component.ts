import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../types/Order';
import { ProductQuantity } from '../types/productQuantity';
import products from '../../data/products.json'

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  @Input() order: Order = []
  productsList = products
  isDisabled = true
  price = 0
  name = ""
  subtotal = 0

  noProduct() {
    return this.isDisabled = this.order.length ? false : true
  }

  calculateSubTotal(id: number, quantity: number) {
    let index = this.productsList.findIndex(product => product.id === id)
    this.name = this.productsList[index].name
    this.price = this.productsList[index].price
    this.subtotal = this.price*quantity
    return this.subtotal
  }

  calculateTotal(){
    let total = 0
    for (let product of this.order){
      total += this.calculateSubTotal(product.id, product.quantity)
    }
    return total.toFixed(1)
  }

  trackByProductId(_index: number, productQuantity: ProductQuantity){
    return productQuantity.id
  }
}
