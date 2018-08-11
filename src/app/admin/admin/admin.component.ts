import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../model/auth.service";
@Component({
  selector: 'app-admin',
  moduleId: module.id,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private auth: AuthService
  , private router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.auth.clear();
    this.router.navigateByUrl('/');
  }


}
