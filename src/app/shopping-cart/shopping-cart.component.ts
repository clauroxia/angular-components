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
  products = products

  calculateTotal(){
    let  total = 0
    for (let product of this.order){
      let quantity = product.quantity
      let price = products[product.id - 1].price
      total += quantity * price
    }

    return total
  }

  trackByProductId(_index: number, productQuantity: ProductQuantity){
    return productQuantity.id
  }
}
