import { Component, OnInit, Input } from '@angular/core';
import { Sensor } from '../model/sensor.model';

@Component({
  selector: 'app-sensorrow',
  templateUrl: './sensorrow.component.html',
  styleUrls: ['./sensorrow.component.css']
})
export class SensorRowComponent implements OnInit {

  @Input() sensorNode: Sensor[];

  constructor() { }

  ngOnInit() {
  }
}
