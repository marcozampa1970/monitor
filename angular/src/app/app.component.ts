import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './model/menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Monitoring System';
  
  constructor(
    private router: Router,
    @Inject('MenuDefs') public menuitems: Menu[]) {
  }

  ngOnInit() {

  }
}
