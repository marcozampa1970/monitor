import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../model/menu.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {

  @Input('item') item: Menu;

  constructor(private location: Location) {
  }

  isActive(): boolean {

    //console.log("this.item.path:" + this.item.path);
    //console.log("this.location.path:" + this.location.path());

    return `${this.item.path}` === this.location.path();
  }

  ngOnInit() {

  }
}
