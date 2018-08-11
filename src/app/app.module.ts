import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { RouterModule } from "@angular/router";
import { StoreComponent } from './store/store/store.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { StoreFirstGuard } from './storeFirst.guard';
import { FormsModule } from '../../node_modules/@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path : "store",
        component : StoreComponent ,
        canActivate: [StoreFirstGuard]
      },
      {
        path : "cart",
        component : CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path : "checkout",
        component : CheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path : "admin",
        loadChildren :"app/admin/admin.module#AdminModule",
        canActivate: [StoreFirstGuard]
      },
      {  path : "**", redirectTo :"/store"}
    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
