import { Component, OnInit } from "@angular/core";
import { UtilityService } from "../../../common/utility.service";
import { MatDialog } from "@angular/material/dialog";
import { DowntimeRegisterComponent } from "../../dialogs/downtime-register/downtime-register.component";
import { ConsumableComponent } from "../../dialogs/consumable/consumable.component";
import { ProcessParametersComponent } from "../../dialogs/process-parameters/process-parameters.component";
import { ProcessEquipmentComponent } from "../../dialogs/process-equipment/process-equipment.component";
import { ScrapMonitoringComponent } from "../../dialogs/scrap-monitoring/scrap-monitoring.component";
import { EcsComponent } from "../../dialogs/ecs/ecs.component";
export interface PeriodicElement {
  date: string;
  hr_coil_no: string;
  input_thickness: string;
  input_width: string;
  input_weight: string;
  input_grade: string;
  cpl_coil_no: number;
  output_thickness: string;
  output_cpl_width: string;
  output_set_width: string;
  output_measured_width: string;
  output_weight: string;
  remark: string;
  process_order: string;
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
    cpl_coil_no: null,
    output_thickness: "",
    output_cpl_width: "",
    output_set_width: "",
    output_measured_width: "",
    output_weight: "",
    remark: "",
    process_order: "",
    action: "",
  },
  {
    date: "02/1/2019",
    hr_coil_no: "KUND864879",
    input_thickness: "5.5",
    input_width: "1200",
    input_weight: "20",
    input_grade: "C75 S",
    cpl_coil_no: null,
    output_thickness: "",
    output_cpl_width: "",
    output_set_width: "",
    output_measured_width: "",
    output_weight: "",
    remark: "",
    process_order: "",
    action: "",
  },
  {
    date: "02/1/2019",
    hr_coil_no: "KUND864879",
    input_thickness: "5.5",
    input_width: "1200",
    input_weight: "20",
    input_grade: "C75 S",
    cpl_coil_no: null,
    output_thickness: "",
    output_cpl_width: "",
    output_set_width: "",
    output_measured_width: "",
    output_weight: "",
    remark: "",
    process_order: "",
    action: "",
  },
];

@Component({
  selector: "app-shift-production-log-book",
  templateUrl: "./shift-production-log-book.component.html",
  styleUrls: ["./shift-production-log-book.component.css"],
})
export class ShiftProductionLogBookComponent implements OnInit {
  shadow1:any;
  shadow2:any;
  shadow3:any;
  shadow4:any;
  shadow5:any;
  shadow6:any;
  panelOpenState:any;
  tooltipOption: object;
  dataSourceCoils2Process: any[];
  displayedTopColumnsCoils2Process: string[] = [
    "sr_no_rs",
    "date_rs",
    "hr_coil_no_rs",
    "input_details",
    "cpl_coil_no_rs",
    "output_details",
    "remark_rs",
    "process_order_rs",
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
    "cpl_coil_no",
    "output_thickness",
    "output_cpl_width",
    "output_set_width",
    "output_measured_width",
    "output_weight",
    "remark",
    "process_order",
    "action",
  ];
  constructor(private utility: UtilityService, public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSourceCoils2Process = ELEMENT_DATA_COILS_PROCESS;
    this.tooltipOption = this.utility.settings().tooltip;
  }

  openDwnTmRegDialog(): void {
    const dialogRef = this.dialog.open(DowntimeRegisterComponent, {
      // width: "1130px",
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  openProcessParamDialog(): void {
    const dialogRef = this.dialog.open(ProcessParametersComponent, {
      width: "1100px",
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  openConsumableDialog(): void {
    const dialogRef = this.dialog.open(ConsumableComponent, {
      width: "890px",
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  openProcessEquipDialog(): void {
    const dialogRef = this.dialog.open(ProcessEquipmentComponent, {
      width: "800px",
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  openScrapMonitorDialog(): void {
    const dialogRef = this.dialog.open(ScrapMonitoringComponent, {
      width: "890px",
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  openEcsDialog(): void {
    const dialogRef = this.dialog.open(EcsComponent, {
      width: "700px",
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
