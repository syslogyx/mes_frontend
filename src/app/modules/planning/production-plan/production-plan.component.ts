import { Component, OnInit } from "@angular/core";
import { UtilityService } from "../../../common/utility.service";
export interface PeriodicElement {
  hr_coil_no: string;
  so_no: string;
  customer_name: string;
  material_code: string;
  hr_width: string;
  order_width: string;
  order_thickness: string;
  quantity: string;
  expected_actual_path: string;
  priority: string;
  grade_equivalent: string;
}

//define constant dummy data for coils to process list
const ELEMENT_PROD_PLAN: PeriodicElement[] = [
  {
    hr_coil_no: "KUND864879",
    so_no: "40999018",
    customer_name: "Printman Industries",
    material_code: "S_CRFHRF",
    hr_width: "1240",
    order_width: "400",
    order_thickness: "0.700",
    quantity: "14.635",
    expected_actual_path: "PMSGCD PMSGCD",
    priority: "",
    grade_equivalent: "",
  },
  {
    hr_coil_no: "KUND864879",
    so_no: "40999018",
    customer_name: "Printman Industries",
    material_code: "S_CRFHRF",
    hr_width: "1240",
    order_width: "400",
    order_thickness: "0.700",
    quantity: "14.635",
    expected_actual_path: "PMSGCD PMSGCD",
    priority: "",
    grade_equivalent: "",
  },
  {
    hr_coil_no: "KUND864879",
    so_no: "40999018",
    customer_name: "Printman Industries",
    material_code: "S_CRFHRF",
    hr_width: "1240",
    order_width: "400",
    order_thickness: "0.700",
    quantity: "14.635",
    expected_actual_path: "PMSGCD PMSGCD",
    priority: "",
    grade_equivalent: "",
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
    campaign_id: "CAMP01",
    width: "400",
    time: "20 Hrs",
    status: "Stop",
  },
  {
    campaign_id: "CAMP01",
    width: "400",
    time: "20 Hrs",
    status: "Stop",
  },
];

// define dummy constant for parting list
const ELEMENT_DATA_PARTING: any[] = [
  {
    coil_no: 123456,
    width: 400,
    thickness: 0.021,
    parted_count: 2,
    quantity: 300,
    reason: "Coil Breakage",
  },
  {
    coil_no: 123456,
    width: 400,
    thickness: 0.021,
    parted_count: 2,
    quantity: 300,
    reason: "Coil Breakage",
  },
  {
    coil_no: 123456,
    width: 400,
    thickness: 0.021,
    parted_count: 2,
    quantity: 300,
    reason: "Coil Breakage",
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
  selector: "app-production-plan",
  templateUrl: "./production-plan.component.html",
  styleUrls: ["./production-plan.component.css"],
})
export class ProductionPlanComponent implements OnInit {
  dataSourceCoils2ProdPlan: any[];
  dataSourceCampaigns: any[];
  datasourceParting: any[];
  activityLog: any[];
  displayedColumnsProdPlan: string[] = [
    "check_box",
    "sr_no",
    "hr_coil_no",
    "so_no",
    "customer_name",
    "material_code",
    "hr_width",
    "order_width",
    "order_thickness",
    "quantity",
    "expected_actual_path",
    "priority",
    "grade_equivalent",
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
  constructor(private utility: UtilityService) {}

  ngOnInit() {
    this.tooltipOption = this.utility.settings().tooltip;
    this.dataSourceCoils2ProdPlan = ELEMENT_PROD_PLAN;
    this.dataSourceCampaigns = ELEMENT_DATA_CAMPAIGN;
    this.datasourceParting = ELEMENT_DATA_PARTING;
    this.activityLog = ELEMENT_DATA_ACTIVITY_LOG;
  }
}
