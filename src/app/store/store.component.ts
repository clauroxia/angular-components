import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { Order } from '../types/Order';
@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ProductListComponent, ShoppingCartComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent {
  order: Order = []

  onOrderChange(newOrder: Order){
    this.order = newOrder
    console.log(this.order)
  }
}
