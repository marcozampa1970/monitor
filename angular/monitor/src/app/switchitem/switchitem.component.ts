import { Component, OnInit, Input } from '@angular/core';
import { Switch } from '../model/switch.model';
import { MonitorService } from '../services/monitor.service';

@Component({
  selector: 'app-switchitem',
  templateUrl: './switchitem.component.html',
  styleUrls: ['./switchitem.component.css']
})
export class SwitchItemComponent implements OnInit {

  @Input() switch: Switch;

  switchR: Switch;
  switchValue: boolean = false;

  constructor(private dataService: MonitorService) { }

  ngOnInit() {
    if (this.switch.value == 0.0) {
      this.switchValue = false;
    } else {
      this.switchValue = true;
    }
  }

  onChange(evt) {  
    if (evt) {
      this.setSwitch(this.switch.id, 1.0, this.switch.unit, this.switch.type, this.switch.name, this.switch.node);
    } else {
      this.setSwitch(this.switch.id, 0.0, this.switch.unit, this.switch.type, this.switch.name, this.switch.node);
    }
  }

  private getSwitch(id: number) {
    try {
      this.dataService.getSwitch(id).subscribe(data => {
        this.switchR = data;
      }, error => { console.log(error, 'error'); });
    } catch (e) {
      console.log(e);
    }
  }

  private setSwitch(id: number, value: number, unit: string, type: string, name: string, node: string) {
    try {
      this.dataService.setSwitch(id, value, unit, type, name, node).subscribe(data => {
        this.switchR = data;
      }, error => { console.log(error, 'error'); });
    } catch (e) {
      console.log(e);
    }
  }

}