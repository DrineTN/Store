import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';
import { StaticdatasourceService } from './staticdatasource.service';
import {RestDataSource} from './data.datasource';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  private loaded: boolean = false;
  constructor(private dataSource: RestDataSource) {}

  loadorders(){
    this.loaded = true;
    this.dataSource.getOrders().subscribe(orders => this.orders = orders);
  }
  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadorders();
    }
    return this.orders;
  }
  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return this.dataSource.saveOrder(order);
  }
  updateOrder(order: Order){
    this.dataSource.updateOrder(order).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => o.id == order.id), 1, order);
    });
  }
  deleteOrder(id: number){
    this.dataSource.deleteOrders(id).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => id == o.id));
    });
  }
}
