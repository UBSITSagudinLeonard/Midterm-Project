import { Component } from '@angular/core';
import { products } from '../models/product.interface'; // Adjust path based on your directory

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {
  products: products[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999, stock: 10, status: 'Available', description: 'Powerful laptop', brand: 'TechPro', rating: 4.5, isFeatured: true },
    { id: 2, name: 'Mouse', category: 'Accessories', price: 25, stock: 50, status: 'Available', description: 'Wireless mouse', brand: 'Logi', rating: 4.2, isFeatured: false },
    { id: 3, name: 'Keyboard', category: 'Accessories', price: 45, stock: 0, status: 'Out of Stock', description: 'Mechanical keyboard', brand: 'Clicky', rating: 4.8, isFeatured: true },
    { id: 4, name: 'Monitor', category: 'Electronics', price: 200, stock: 5, status: 'Limited', description: '4K monitor', brand: 'ViewMax', rating: 4.4, isFeatured: true },
    { id: 5, name: 'Desk Chair', category: 'Furniture', price: 150, stock: 2, status: 'Limited', description: 'Ergonomic chair', brand: 'ComfortCo', rating: 4.0, isFeatured: false },
    { id: 6, name: 'USB-C Cable', category: 'Accessories', price: 10, stock: 100, status: 'Available', description: 'Fast charging cable', brand: 'ChargeUp', rating: 4.7, isFeatured: false },
    { id: 7, name: 'Headphones', category: 'Electronics', price: 80, stock: 15, status: 'Available', description: 'Noise cancelling', brand: 'AudioBeat', rating: 4.3, isFeatured: false },
    { id: 8, name: 'Webcam', category: 'Electronics', price: 60, stock: 0, status: 'Out of Stock', description: 'HD webcam', brand: 'VisionPro', rating: 3.9, isFeatured: false },
    { id: 9, name: 'Desk Lamp', category: 'Furniture', price: 30, stock: 20, status: 'Available', description: 'LED lamp', brand: 'BrightLite', rating: 4.6, isFeatured: true },
    { id: 10, name: 'External Drive', category: 'Electronics', price: 120, stock: 8, status: 'Available', description: '1TB SSD', brand: 'DataSafe', rating: 4.9, isFeatured: true }
  ];

  selectedProduct: products | null = null;
  showModal: boolean = false;

  viewProductDetails(product: Products): void {
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}