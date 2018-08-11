import { Component, OnInit } from '@angular/core';
import { ProductrepositoryService } from '../../model/productrepository.service';
import { Product } from '../../model/product.model';
import { Cart } from '../../model/cart.model';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-store',
  moduleId: module.id,
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;
  constructor(private respitory:ProductrepositoryService,
              private cart:Cart,
              private router:Router) { }

  ngOnInit() {
  }
  get products(): Product[]{
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
    return this.respitory.getProducts(this.selectedCategory)
    .slice(pageIndex , pageIndex + this.productsPerPage)
  }
  
  get categories(): string []{
    return this.respitory.getCategories();
  }
  changeCategory(newCategory?: string){
    this.selectedCategory = newCategory;
  }
  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  changePageSize(newSize: number){
    this.productsPerPage = Number(newSize);
    this.changePage(1)
  }
 /* get pageCount(): number {
    return Math.ceil(this.respitory.getProducts(this.selectedCategory).length / this.productsPerPage)
  } */
  get pageNumbers(): number[] {
    return Array(Math.ceil(this.respitory
    .getProducts(this.selectedCategory).length / this.productsPerPage))
    .fill(0).map((x, i) => i + 1)
  } 
  addProductToCart(product: Product){
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart")
    }
}
