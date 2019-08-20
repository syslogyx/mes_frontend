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

@Component({
  selector: "app-production-plan",
  templateUrl: "./production-plan.component.html",
  styleUrls: ["./production-plan.component.css"],
})
export class ProductionPlanComponent implements OnInit {
  dataSourceCoils2ProdPlan: any[];
  dataSourceCampaigns: any[];
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
  tooltipOption: any;
  constructor(private utility:UtilityService) {}

  ngOnInit() {
    this.tooltipOption = this.utility.settings().tooltip;
    this.dataSourceCoils2ProdPlan = ELEMENT_PROD_PLAN;
    this.dataSourceCampaigns = ELEMENT_DATA_CAMPAIGN;
  }
}
