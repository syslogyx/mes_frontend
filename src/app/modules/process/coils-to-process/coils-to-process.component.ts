import { Component, OnInit } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { UtilityService } from "../../../common/utility.service";
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

// define dummy constant for campain list
const ELEMENT_DATA_CAMPAIGN: any[] = [
  {
    campaign_id: "CAMP01",
    width: "400",
    time: "20 Hrs",
    status: "In Progress",
  },
  {
    campaign_id: "CAMP02",
    width: "400",
    time: "20 Hrs",
    status: "Finished",
  },
  {
    campaign_id: "CAMP03",
    width: "400",
    time: "20 Hrs",
    status: "Finished",
  },
];

// define dummy constant for parting list
const ELEMENT_DATA_PARTING: any[] = [
  {
    coil_no: 1234544,
    width: 400,
    thickness: 0.021,
    parted_count: 2,
    quantity: 300,
    reason: "Coil Breakage",
  },
  {
    coil_no: 1234445,
    width: 400,
    thickness: 0.021,
    parted_count: 2,
    quantity: 150,
    reason: "",
  },
  {
    coil_no: 1234446,
    width: 400,
    thickness: 0.021,
    parted_count: 2,
    quantity: 149,
    reason: "",
  },
];

// define dummy constant for activity log list
const ELEMENT_DATA_ACTIVITY_LOG: any[] = [
  {
    operator_name: "Operator Name",
    description:
      "SO No. 440990108, 401004588, 401004588 are Clubbed and Planned",
    date_time: "28/06/2019 16:01:14",
  },
  {
    operator_name: "Operator Name",
    description:
      "SO No. 440990108, 401004588, 401004588 are Clubbed and Planned",
    date_time: "28/06/2019 16:01:14",
  },
  {
    operator_name: "Operator Name",
    description:
      "SO No. 440990108, 401004588, 401004588 are Clubbed and Planned",
    date_time: "28/06/2019 16:01:14",
  },
];

@Component({
  selector: "app-coils-to-process",
  templateUrl: "./coils-to-process.component.html",
  styleUrls: ["./coils-to-process.component.css"],
})
export class CoilsToProcessComponent implements OnInit {
  panelOpenState:any;
  dataSourceCoils2Process: any[];
  dataSourceCampaigns: any[];
  datasourceParting: any[];
  activityLog: any[];
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

  displayedColumnsCampaign: string[] = [
    "sr_no",
    "campaign_id",
    "width",
    "time",
    "status",
  ];

  displayedColumnsParting: string[] = [
    "sr_no",
    "coil_no",
    "width",
    "thickness",
    "parted_count",
    "quantity",
    "reason",
  ];

  tooltipOption: any;

  constructor(private utility : UtilityService) {}

  ngOnInit() {
    this.tooltipOption = this.utility.settings().tooltip;
    this.dataSourceCoils2Process = ELEMENT_DATA_COILS_PROCESS;
    this.dataSourceCampaigns = ELEMENT_DATA_CAMPAIGN;
    this.datasourceParting = ELEMENT_DATA_PARTING;
    this.activityLog = ELEMENT_DATA_ACTIVITY_LOG;
  }
}
