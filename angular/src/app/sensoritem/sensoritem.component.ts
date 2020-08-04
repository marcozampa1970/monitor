import { Component, OnInit, Input } from '@angular/core';
import { Sensor } from '../model/sensor.model';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-sensoritem',
  templateUrl: './sensoritem.component.html',
  styleUrls: ['./sensoritem.component.css']
})
export class SensorItemComponent implements OnInit {

  @Input() sensor: Sensor;

  dateSide: String;
  timeSide: String;
  isHeader: boolean = false;

  private innerWidth: number;
  private innerHeight: number;

  constructor(public datePipe: DatePipe) {
  }

  
  ngOnInit() {
    this.dateSide = this.datePipe.transform(new Date(this.sensor.dateTime), 'dd/MM/yyyy');
    this.timeSide = this.datePipe.transform(new Date(this.sensor.dateTime), 'HH:mm:ss');

    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;

    if (this.sensor.id == 0) {
      this.isHeader = true;
    }
  }
}
