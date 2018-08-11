import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../model/auth.service';

@Component({
  selector: 'app-auth',
  moduleId: module.id,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public username: string;
  public password: string;
  public errorMessage: string;
  constructor(
    private router: Router,
    private authService : AuthService
  ) { }

  ngOnInit() {
  }
  athenticate(form: NgForm){
    if (form.valid) {
      this.authService.authenticate(this.username,this.password)
      .subscribe(response => {
        if (response) {
          this.router.navigateByUrl("/admin/main");
        }
        this.errorMessage = 'Auth failed'
      })
      
    }
    else{
      this.errorMessage = " Form data Invalid ";
    }
  }

}
