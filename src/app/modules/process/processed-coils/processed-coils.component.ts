import { Component, OnInit } from "@angular/core";
import { UtilityService } from "../../../common/utility.service";

export interface PeriodicElement {
  date: string;
  so_number: string;
  hr_coil_no: string;
  input_thickness: string;
  input_width: string;
  input_weight: string;
  input_grade: string;
  cpl_coil_no: string;
  output_thickness: string;
  output_cpl_width: string;
  output_set_width: string;
  output_measured_width: string;
  output_weight: string;
  customer_name: string;
  next_route: string;
  remark: string;
  start_time: string;
  finish_time: string;
  delay: string;
  process_order: string;
}

//define constant dummy data for coils to process list
const ELEMENT_DATA_COILS_PROCESS: PeriodicElement[] = [
  {
    date: "02/1/2019",
    so_number: "400990108",
    hr_coil_no: "KUND8K0381",
    input_thickness: "5.5",
    input_width: "1240",
    input_weight: "20",
    input_grade: "C75 S",
    cpl_coil_no: "KP1A8L1992",
    output_thickness: "5.5",
    output_cpl_width: "1226",
    output_set_width: "1222",
    output_measured_width: "1220",
    output_weight: "19.4",
    customer_name: "JSW Steel, Vijaynagar",
    next_route: "MILL2",
    remark: "Test Remark",
    start_time: "10 : 15 AM",
    finish_time: "10 : 40 AM",
    delay: "10 Min",
    process_order: "10012345678",
  },
  {
    date: "02/1/2019",
    so_number: "400990108",
    hr_coil_no: "KUND8K0382",
    input_thickness: "5.5",
    input_width: "1240",
    input_weight: "20",
    input_grade: "C75 S",
    cpl_coil_no: "KP1A8L1993",
    output_thickness: "5.5",
    output_cpl_width: "1226",
    output_set_width: "1222",
    output_measured_width: "1220",
    output_weight: "19.4",
    customer_name: "JSW Steel, Vijaynagar",
    next_route: "MILL2",
    remark: "Test Remark",
    start_time: "10 : 15 AM",
    finish_time: "10 : 40 AM",
    delay: "10 Min",
    process_order: "10012345678",
  },
  {
    date: "02/1/2019",
    so_number: "400990108",
    hr_coil_no: "KUND8K0383",
    input_thickness: "5.5",
    input_width: "1240",
    input_weight: "20",
    input_grade: "C75 S",
    cpl_coil_no: "KP1A8L1994",
    output_thickness: "5.5",
    output_cpl_width: "1226",
    output_set_width: "1222",
    output_measured_width: "1220",
    output_weight: "19.4",
    customer_name: "JSW Steel, Vijaynagar",
    next_route: "MILL2",
    remark: "Test Remark",
    start_time: "10 : 15 AM",
    finish_time: "10 : 40 AM",
    delay: "10 Min",
    process_order: "10012345678",
  },
];

@Component({
  selector: "app-processed-coils",
  templateUrl: "./processed-coils.component.html",
  styleUrls: ["./processed-coils.component.css"],
})
export class ProcessedCoilsComponent implements OnInit {
  panelOpenState: any;
  dataSourceCoils2Process: any[];
  displayedTopColumnsCoils2Process: string[] = [
    "sr_no_rs",
    "date_rs",
    "so_number_rs",
    "hr_coil_no_rs",
    "input_details",
    "cpl_coil_no_rs",
    "output_details",
    "customer_name_rs",
    "next_route_rs",
    "remark_rs",
    "start_time_rs",
    "finish_time_rs",
    "delay_rs",
    "process_order_rs",
  ];
  displayedBottomColumnsCoils2Process: string[] = [
    "sr_no",
    "date",
    "so_number",
    "hr_coil_no",
    "input_thickness",
    "input_width",
    "input_weight",
    "input_grade",
    "cpl_coil_no",
    "output_thickness",
    "output_cpl_width",
    "output_set_width",
    "output_measured_width",
    "output_weight",
    "customer_name",
    "next_route",
    "remark",
    "start_time",
    "finish_time",
    "delay",
    "process_order",
  ];
  constructor(private utility: UtilityService) {}

  ngOnInit() {
    this.dataSourceCoils2Process = ELEMENT_DATA_COILS_PROCESS;
  }
}
