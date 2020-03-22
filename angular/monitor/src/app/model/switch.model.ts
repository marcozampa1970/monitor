export class Switch {

  id: number;
  value: number;
  unit: string;
  type: string;
  name: string;
  node: string;
  dateTime: Date;

  constructor(id: number, value: number, unit: string, type: string, name: string, node: string, dateTime: Date) {
    this.id = id;
    this.name = name;    
    this.value = value;
    this.unit = unit;
    this.type = type;
    this.node = node;
    this.dateTime = dateTime;
  }
}
