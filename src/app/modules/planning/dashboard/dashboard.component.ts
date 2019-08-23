import { Component, OnInit } from "@angular/core";
import { ChartType, ChartEvent } from "ng-chartist";
declare var require: any;

const data: any = require("./prod-plan-data.json");
const pieData: any = require("./pie-chart-data.json");

// define dummy constant for parting list
const ELEMENT_DATA_PROGRESS_SO: any[] = [
  {
    so_no: 440330108,
    customer: "Printman Industries",
    order_quantity: 0.021,
    width: 278,
    thickness: 1.02,
    current_process: "S",
    status: "In Progress",
  },
  {
    so_no: 440330108,
    customer: "Printman Industries",
    order_quantity: 0.021,
    width: 278,
    thickness: 1.02,
    current_process: "S",
    status: "In Progress",
  },
  {
    so_no: 440330108,
    customer: "Printman Industries",
    order_quantity: 0.021,
    width: 278,
    thickness: 1.02,
    current_process: "S",
    status: "In Progress",
  },
];

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
  shadow1:any;
  shadow2:any;
  shadow3:any;
  shadow4:any;

  dataSourceProgressSo: any[];
  // Line chart
  lineChart1: Chart = {
    type: "Line",
    data: data["LineWithArea"],
    options: {
      low: 0,
      high: 35000,
      showArea: true,
      fullWidth: true,
    },
  };

   // This is for the donute chart
   donuteChart1: Chart = {
    type: "Pie",
    data: data["Pie"],
    options: {
      donut: true,
      showLabel: true,
      donutWidth: 30,
      width: 300,
      height: 180,
    },
    // events: {
    //   draw(data: any): boolean {
    //     return data;
    //   }
    // }
  };

  displayedColumnsProgressSo: string[] = [
    "sr_no",
    "so_no",
    "customer",
    "order_quantity",
    "width",
    "thickness",
    "current_process",
    "status",
  ];
  constructor() {}

  ngOnInit() {
    this.dataSourceProgressSo = ELEMENT_DATA_PROGRESS_SO;

    
  }
}
