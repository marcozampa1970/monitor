import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../model/menu.model';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input('items') items: Menu[];

  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    console.log("Init menu");
  }

  ngAfterViewInit() {
    this.router.navigate(['/home']);
  }

  logout() {
    console.log("logout");
    this.cookieService.deleteAll('/', environment.domain);
  }
}
