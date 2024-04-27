import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductQuantity } from '../types/productQuantity';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product_id = 2
  @Input() product_name = 'n'
  @Input() product_category = 'cat'
  @Input() product_price = 2.5
  @Input() product_img_url = 'https://res.cloudinary.com/dwdgpw20b/image/upload/v1698330380/products/milk_vmhcfw.webp'

  quantity = 0
  @Output() quantityChange = new EventEmitter<ProductQuantity>()

  increaseQuantity(){
    this.quantity += 1
    this.emitQuantityChange()
  }

  decreaseQuantity(){
    if (this.quantity === 0) return
    this.quantity -= 1
    this.emitQuantityChange
  }

  emitQuantityChange(){
    this.quantityChange.emit({
      id: this.product_id,
      quantity: this.quantity
    })
  }
}