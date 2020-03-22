import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "../model/user.model";
import { Observable } from "rxjs/index";
import { environment } from '../../environments/environment';
import { CookieService } from "ngx-cookie-service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(loginPayload) {

    const headers = {
      // 'Authorization': 'Basic ' + btoa('client-id:client-secret'), // AL MOMENTO GESTITO DA NGINX!!!!
      'Content-type': 'application/x-www-form-urlencoded'
    }

    return this.http.post(environment.urlOauthToken, loginPayload, { headers });
  }

  getUsers() {
    console.log('urlUsersGet - ' + environment.urlUsersGet);
    return this.http.get<User[]>(environment.urlUsersGet + '?access_token=' + JSON.parse(this.cookieService.get('token')).access_token, httpOptions);
  }
}
