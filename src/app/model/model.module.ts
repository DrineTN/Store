import { NgModule } from "@angular/core";
import { ProductrepositoryService } from "./productrepository.service";
import { StaticdatasourceService } from "./staticdatasource.service";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { HttpModule } from "../../../node_modules/@angular/http";
import { RestDataSource } from "./data.datasource";
import { AuthService } from "./auth.service";



@NgModule({
    imports: [HttpModule],
    providers:[
        ProductrepositoryService , StaticdatasourceService , 
        Cart , Order, OrderRepository , {provide: StaticdatasourceService, useClass:RestDataSource} ,
        RestDataSource , AuthService
    ]
})
export class ModelModule {}