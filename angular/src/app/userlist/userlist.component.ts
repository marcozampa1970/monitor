import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../model/user.model";
import { UserService } from "../services/user.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  users: User[];

  
  constructor(private userService: UserService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {

    console.log("users");

    if (!this.cookieService.get('token')) {
      this.router.navigate(['login', 'users']);
      return;
    }

    this.userService.getUsers().subscribe(data => {
      this.users = data;
    }, error => {
      console.log(error, 'error');
    });
  }
}