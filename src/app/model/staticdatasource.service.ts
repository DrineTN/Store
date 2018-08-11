import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Order } from './order.model';
import { RestDataSource } from './data.datasource';
@Injectable()
export class StaticdatasourceService {
  constructor(private restDataSource: RestDataSource) { }
  private products: Product[]
    getProducts(): Observable<Product[]> {
      return this.restDataSource.getProducts();
    }
}
