import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/cart.model';

@Component({
  selector: 'app-carte-summary',
  moduleId : module.id,
  templateUrl: './carte-summary.component.html',
  styleUrls: ['./carte-summary.component.css']
})
export class CarteSummaryComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit() {
  }

}
