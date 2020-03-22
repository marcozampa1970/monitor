import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Switch } from '../model/switch.model';
import { CookieService } from "ngx-cookie-service";

import { Subscription, timer } from 'rxjs';
import { MonitorService } from '../services/monitor.service';

@Component({
  selector: 'app-switchelist',
  templateUrl: './switchlist.component.html',
  providers: [MonitorService]
})
export class SwitchListComponent implements OnInit, OnDestroy {

  switches: Switch[];
  refresh: boolean;
  errorMsg = null;

  private subscription: Subscription;
  private dataService: MonitorService;
  private router: Router;

  constructor(dataService: MonitorService, router: Router, private cookieService: CookieService) {
    this.dataService = dataService;
    this.router = router;
  }

  ngOnInit() {
    console.log("switches");
    this.errorMsg = null;

    if (!this.cookieService.get('token')) {
      this.router.navigate(['login', 'switches']);
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
        this.dataService.getSwitches().subscribe(data => {
          this.switches = data;
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
