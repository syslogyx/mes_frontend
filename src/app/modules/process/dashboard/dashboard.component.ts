import { Component, OnInit } from "@angular/core";
import * as scrapData from "./scrap-data";
import * as replacementData from "./replacement-data";
import * as massBalData from "./mass-balancing-data";
import { LocalDataSource } from "ng2-smart-table";
import { ChartType, ChartEvent } from "ng-chartist";
declare var require: any;

const data: any = require("./chart-data.json");

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  scrapSource: LocalDataSource;
  replacementSource: LocalDataSource;
  massBalSource: LocalDataSource;

  // This is for the donute chart
  donuteChart1: Chart = {
    type: "Pie",
    data: data["Pie"],
    options: {
      donut: true,
      showLabel: true,
      donutWidth: 25,
      width: 300,
      height: 200,
    },
    // events: {
    //   draw(data: any): boolean {
    //     return data;
    //   }
    // }
  };

  constructor() {
    this.scrapSource = new LocalDataSource(scrapData.data);
    this.replacementSource = new LocalDataSource(replacementData.data);
    this.massBalSource = new LocalDataSource(massBalData.data);
  }

  scrapSettings = scrapData.settings;
  replacementSettings = replacementData.settings;
  massBalSettings = massBalData.settings;

  ngOnInit() {}
}
