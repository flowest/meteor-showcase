import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DemoDataService } from "./demo-data.service";
import { Demo } from "../../../../both/models/demo.model";
import template from "./demo.component.html";
import style from "./demo.component.scss";

@Component({
  selector: "demo",
  template,
  styles: [ style ]
})
export class DemoComponent implements OnInit {
  greeting: string;
  data: Observable<Demo[]>;

  name:string;
  age:number;

  constructor(private demoDataService: DemoDataService) {
    this.greeting = "Hello Demo Component!";
    this.name = "";
    this.age = 0;
  }

  ngOnInit() {
    this.data = this.demoDataService.getData().zone();
  }

  add(){
    var newRecord:Demo = {
      age: this.age,
      name: this.name
    }
    this.demoDataService.add(newRecord);

    this.name = "";
    this.age = 0;
  }

  remove(demo){
    this.demoDataService.remove(demo._id);
  }
}
