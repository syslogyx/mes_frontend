import { Component, OnInit } from "@angular/core";
export interface PeriodicElement {
  date: string;
  hr_coil_no: string;
  input_thickness: string;
  input_width: string;
  input_weight: string;
  input_grade: string;
  required_width: string;
  customer_name: string;
  process_order: string;
  sales_order: string;
  next_route: string;
  location: string;
  priority: string;
  action: string;
}

//define constant dummy data for coils to process list
const ELEMENT_DATA_COILS_PROCESS: PeriodicElement[] = [
  {
    date: "02/1/2019",
    hr_coil_no: "KUND864879",
    input_thickness: "5.5",
    input_width: "1200",
    input_weight: "20",
    input_grade: "C75 S",
    required_width: "--",
    customer_name: "JSW Steel, Vijaynagar",
    process_order: "10012345678",
    sales_order: "SO123456",
    next_route: "MILL2",
    location: "Yard 01",
    priority: "High",
    action: "",
  },
  {
    date: "02/1/2019",
    hr_coil_no: "KUND864879",
    input_thickness: "5.5",
    input_width: "1200",
    input_weight: "20",
    input_grade: "C75 S",
    required_width: "--",
    customer_name: "JSW Steel, Vijaynagar",
    process_order: "10012345678",
    sales_order: "SO123456",
    next_route: "MILL2",
    location: "Yard 01",
    priority: "High",
    action: "",
  },
  {
    date: "02/1/2019",
    hr_coil_no: "KUND864879",
    input_thickness: "5.5",
    input_width: "1200",
    input_weight: "20",
    input_grade: "C75 S",
    required_width: "--",
    customer_name: "JSW Steel, Vijaynagar",
    process_order: "10012345678",
    sales_order: "SO123456",
    next_route: "MILL2",
    location: "Yard 01",
    priority: "High",
    action: "",
  },
];

@Component({
  selector: "app-shift-production-log-book",
  templateUrl: "./shift-production-log-book.component.html",
  styleUrls: ["./shift-production-log-book.component.css"],
})
export class ShiftProductionLogBookComponent implements OnInit {
  dataSourceCoils2Process: any[];
  displayedTopColumnsCoils2Process: string[] = [
    "sr_no_rs",
    "date_rs",
    "hr_coil_no_rs",
    "input_details",
    "required_width_rs",
    "customer_name_rs",
    "process_order_rs",
    "sales_order_rs",
    "next_route_rs",
    "location_rs",
    "priority_rs",
    "action_rs",
  ];
  displayedBottomColumnsCoils2Process: string[] = [
    "sr_no",
    "date",
    "hr_coil_no",
    "input_thickness",
    "input_width",
    "input_weight",
    "input_grade",
    "required_width",
    "customer_name",
    "process_order",
    "sales_order",
    "next_route",
    "location",
    "priority",
    "action",
  ];
  constructor() {}

  ngOnInit() {
    this.dataSourceCoils2Process = ELEMENT_DATA_COILS_PROCESS;
  }
}
