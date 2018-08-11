import { Router, RouterStateSnapshot } from "../../../node_modules/@angular/router";
import { AuthService } from "../model/auth.service";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class AuthGuard { 
    constructor(private router:Router,
                private auth:AuthService
    ) { }
    canActivate(route:Router ,
        state:RouterStateSnapshot
    ): boolean{
        if (!this.auth.authenticated) {
            this.router.navigateByUrl("/admin/auth");
            return false
        }
        return true;
    }

}