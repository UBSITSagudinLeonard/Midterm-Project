import { Component } from '@angular/core';
import { products } from '../models/product.interface'; // Ensure this path is correct

@Component({
  selector: 'app-products',
  templateUrl: './products.html', // Ensure this filename matches exactly
  styleUrls: ['./products.css']
})
export class Products { // Ensure the class name matches your file name
  // 1. Declare these properties at the top of the class
  products: products[] = [
    // ... your 10 product objects here ...
  ];
  
  selectedProduct: products | null = null;
  showModal: boolean = false;

  // 2. Define these methods inside the class
  viewProductDetails(product: products): void {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProduct = null;
  }
}

