import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SensorListComponent } from './sensorlist/sensorlist.component';
import { SwitchListComponent } from './switchlist/switchlist.component';
import { UserListComponent } from './userlist/userlist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'sensors', component: SensorListComponent, pathMatch: 'full' },
  { path: 'switches', component: SwitchListComponent, pathMatch: 'full' },
  { path: 'users', component: UserListComponent, pathMatch: 'full' },
  { path: 'login/:fromview', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
