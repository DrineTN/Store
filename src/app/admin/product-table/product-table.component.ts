import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product.model";
import {ProductrepositoryService} from "../../model/productrepository.service";

@Component({
  selector: 'app-product-table',
  moduleId: module.id,
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  product: Product = new Product();
  constructor(private repository: ProductrepositoryService){
  }
  getProducts(): Product[] {
    return this.repository.getProducts();
  }
  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }
  ngOnInit() {
  }

}
