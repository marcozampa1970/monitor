import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sensor } from '../model/sensor.model';
import { Switch } from '../model/switch.model';
import { environment } from '../../environments/environment';
import { CookieService } from "ngx-cookie-service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MonitorService {

  http: HttpClient;
  private switchUrl: string;

  constructor(http: HttpClient, private cookieService: CookieService) {
    this.http = http;
  }

  getSensors() {
    console.log('urlSensorsGet - ' + environment.urlSensorsGet);
    return this.http.get<Sensor[]>(environment.urlSensorsGet + '?access_token=' + JSON.parse(this.cookieService.get('token')).access_token, httpOptions);
  }

  getSwitch(id: number) {

    this.switchUrl = environment.urlSwitchGet;
    this.switchUrl = this.switchUrl.replace('id', id.toString());

    console.log('urlSwitchGet - ' + this.switchUrl);
    return this.http.get<Switch>(this.switchUrl + '?access_token=' + JSON.parse(this.cookieService.get('token')).access_token, httpOptions);    
  }

  getSwitches() {
    console.log('urlSwitchesGet - ' + environment.urlSwitchesGet);
    return this.http.get<Switch[]>(environment.urlSwitchesGet + '?access_token=' + JSON.parse(this.cookieService.get('token')).access_token, httpOptions);
  }

  setSwitch(id: number, value: number, unit: string, type: string, description: string, node: string) {
    console.log('urlSwitchSet - ' + environment.urlSwitchSet);
    const body = '{\"id\":' + id + ',\"value\":' + value + ',\"unit\":\"' + unit + '\",\"type\":\"' + type + '\",\"description\":\"' + description + '\",\"node\":\"' + node + '\"}';
    console.log('body - ' + body);
    return this.http.post<Switch>(environment.urlSwitchSet + '?access_token=' + JSON.parse(this.cookieService.get('token')).access_token, body, httpOptions);    
  }
}
