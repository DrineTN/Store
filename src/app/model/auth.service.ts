import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { RestDataSource } from "./data.datasource";
@Injectable()
export class AuthService { 
   constructor(private dataSource: RestDataSource) {} 
   authenticate(username: string,password : string): Observable<boolean> {
       return this.dataSource.authenticate(username,password);
   }
   get authenticated():boolean {
       return this.dataSource.auth_token != null;
   }
   clear() {
       this.dataSource.auth_token = null;
   }
}