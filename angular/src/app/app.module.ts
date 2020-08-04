import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { ReactiveFormsModule } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { SensorItemComponent } from './sensoritem/sensoritem.component';
import { SensorListComponent } from './sensorlist/sensorlist.component';
import { SwitchListComponent } from './switchlist/switchlist.component';
import { SwitchItemComponent } from './switchitem/switchitem.component';
import { UserListComponent } from './userlist/userlist.component';

import { Menu } from './model/menu.model';
import { LoginComponent } from './login/login.component';

import { UserItemComponent } from './useritem/useritem.component';
import { SensorRowComponent } from './sensorrow/sensorrow.component';

export const menuitems: Menu[] = [
  { label: 'Home', name: 'HOME', path: '/home', component: HomeComponent },
  { label: 'Sensors', name: 'SEN', path: '/sensors', component: SensorListComponent },
  { label: 'Switches', name: 'ACT', path: '/switches', component: SwitchListComponent },
  { label: 'Users', name: 'USER', path: '/users', component: UserListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MenuitemComponent,
    SensorItemComponent,
    SensorListComponent,
    SwitchListComponent,
    SwitchItemComponent,
    LoginComponent,
    UserListComponent,
    UserItemComponent,
    SensorRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UiSwitchModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: 'MenuDefs', useValue: menuitems }, CookieService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
