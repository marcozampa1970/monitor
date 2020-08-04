import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { HttpParams, HttpErrorResponse } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { CookieService } from "ngx-cookie-service";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean;
  private toView: string;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private userService: UserService, private cookieService: CookieService) { }

  ngOnInit() {
    console.log("Init login");
    this.toView = 'home';
    this.invalidLogin = false;
    this.route.params.subscribe(param => {
      console.log("from: " + param.fromview);
      this.toView = param.fromview;
    });

    this.cookieService.deleteAll('/', environment.domain);
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const body = new HttpParams()
      .set('username', this.loginForm.controls.username.value)
      .set('password', this.loginForm.controls.password.value)
      .set('grant_type', 'password');

    this.userService.login(body.toString()).subscribe(data => {
      this.cookieService.set('token', JSON.stringify(data), 5, '/', environment.domain, true); 
      this.router.navigate([this.toView]);
    }, httpError => {

      if (httpError instanceof HttpErrorResponse) {
        this.invalidLogin = true;
        alert(httpError.error.error);
        console.log('error - ' + httpError.error.error + ' - ' + httpError.message);
      }
    });
  }



}
