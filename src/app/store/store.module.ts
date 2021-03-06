import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store/store.component";
import { CounterDirective } from './counter.directive';
import { CarteSummaryComponent } from './carte-summary/carte-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from "@angular/router";
@NgModule({
imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
declarations: [StoreComponent, CounterDirective, CarteSummaryComponent, CartDetailComponent, CheckoutComponent],
exports: [StoreComponent]
})
export class StoreModule { }