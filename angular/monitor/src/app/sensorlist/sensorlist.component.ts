import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Sensor } from '../model/sensor.model';
import { CookieService } from "ngx-cookie-service";

import { Subscription, timer } from 'rxjs';
import { MonitorService } from '../services/monitor.service';

@Component({
  selector: 'app-sensorlist',
  templateUrl: './sensorlist.component.html',
  providers: [MonitorService]
})
export class SensorListComponent implements OnInit, OnDestroy {

  sensorNodes: Array<Sensor[]>;

  refresh: boolean;
  errorMsg = null;

  private subscription: Subscription;
  private monitorService: MonitorService;
  private router: Router;

  constructor(monitorService: MonitorService, router: Router, private cookieService: CookieService) {
    this.monitorService = monitorService;
    this.router = router;
  }

  ngOnInit() {
    console.log("sensors");
    this.errorMsg = null;
    if (!this.cookieService.get('token')) {
      this.router.navigate(['login', 'sensors']);
      return;
    }

    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.refresh = true;
    try {
      const source = timer(0, 15000);

      this.subscription = source.subscribe(t => {

        this.monitorService.getSensors().subscribe(data => {

          this.sensorNodes = undefined;

          if (data != undefined && data != null) {

            let tempNodeName: string = "";
            let index: number = 0;

            data.forEach(element => {

              let nodeName: string = element.node;

              if (nodeName != tempNodeName) {

                tempNodeName = nodeName;

                // name e node uguali per tutti i sensori dello stesso ESP8266
                var sensors: Sensor[] = [new Sensor(0, 0, "", "", element.name, element.node, new Date()), element];

                if (this.sensorNodes == undefined) {
                  this.sensorNodes = new Array(sensors);
                  index = 0;
                } else {
                  this.sensorNodes.push(sensors);
                  index++;
                }
              } else if (nodeName == tempNodeName) {
                var sensors: Sensor[] = this.sensorNodes[index];
                sensors.push(element);
                this.sensorNodes[index] = sensors;
              }
            });
          }        
        }, error => {
          this.stopTimer();
          this.errorMsg = error.error.error_description;
          console.log(error, 'error');
        });
      }, error => {
        console.log(error, 'error');
      });
    } catch (e) {
      console.log(e);
    }
  }

  stopTimer() {
    this.refresh = false;
    if (this.subscription != undefined) {
      this.subscription.unsubscribe();
    }
  }

  onChange(evt) {
    if (evt) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }
}