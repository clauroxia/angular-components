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

  noProduct() {
    this.isDisabled = this.order.length ? false : true
  }

  calculateTotal(){
    let total = 0
    for (let product of this.order){
      let quantity = product.quantity
      let price = this.productsList[this.findIndex(product.id)].price
      total += quantity * price
    }
    return total.toFixed(1)
  }

  trackByProductId(_index: number, productQuantity: ProductQuantity){
    return productQuantity.id
  }

  findIndex(id: number) {
    return this.productsList.findIndex(product => product.id === id)
  }
}
