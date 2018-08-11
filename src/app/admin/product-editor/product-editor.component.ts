import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductrepositoryService} from "../../model/productrepository.service";
import {Product} from "../../model/product.model";

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {

  public editing: boolean = false;
  product: Product = new Product();
  constructor(private repository: ProductrepositoryService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
                this.editing = this.activateRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      Object.assign(this.product ,
        this.repository.getProduct(this.activateRoute.snapshot.params['id'])
      );
    }
  }
  save(form: NgForm){
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("admin/main/products");
  }
  ngOnInit() {
    
  }

}
