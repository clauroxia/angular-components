import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantity } from './types/productQuantity';
import { Order } from './types/Order';
import products from '../../../../data/products.json';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  order: Order = [];
  products = products;

  @Output() orderChange = new EventEmitter<Order>();

  onQuantityChange(newProductQuantity: ProductQuantity) {
    this.updateOrder(newProductQuantity);
  }

  updateOrder(newProductQuantity: ProductQuantity) {
    let productIndex = this.order.findIndex(
      (orderProduct) => orderProduct.id === newProductQuantity.id
    );

    if (productIndex < 0) {
      // Create
      this.order.push(newProductQuantity);
    } else if (newProductQuantity.quantity === 0) {
      // Delete
      this.order.splice(productIndex, 1);
    } else {
      // Update
      this.order[productIndex].quantity = newProductQuantity.quantity;
    }

    this.orderChange.emit(this.order);
  }
}
