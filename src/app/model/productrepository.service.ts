import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticdatasourceService } from './staticdatasource.service';
import {RestDataSource} from './data.datasource';
import {ifTrue} from "codelyzer/util/function";

@Injectable()
export class ProductrepositoryService {
  private products: Product[] = [];
  private categories: string[] = [];
  constructor(
    private dataSource: RestDataSource
  ) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category)
          .filter((c , index , array) => array.indexOf(c) == index).sort();
    });
  }
  getProducts(category: string = null): Product[]{
    return this.products.filter(p => category == null || category == p.category)
  }
  getProduct(id: number): Product{
    return this.products.find(p => p.id == id);
  }
  getCategories(): string [] {
    return this.categories;
  }
  saveProduct(product: Product) {
    if (product.id == null || product.id == 0){
      this.dataSource.saveProduct(product).subscribe(p => {
        this.products.splice(this.products.findIndex( pr => pr.id == product.id), 1 , product);
      });
    } else {
      this.dataSource.updateProduct(product).subscribe(p => {
        this.products.splice(this.products.findIndex(pr => pr.id == product.id), 1, product);
      });
    }
  }
  deleteProduct(id: number){
    this.dataSource.deleteProduct(id).subscribe(p => {
      this.products.splice(this.products.findIndex(pr => pr.id == id), 1);
    });
  }
}
