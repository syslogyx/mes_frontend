import { Component, OnInit } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { MatDialog } from "@angular/material";
import { DowntimeRegisterComponent } from "../../dialogs/downtime-register/downtime-register.component";
import { ProcessParametersComponent } from "../../dialogs/process-parameters/process-parameters.component";
import { ConsumableComponent } from "../../dialogs/consumable/consumable.component";
import { ProcessEquipmentComponent } from "../../dialogs/process-equipment/process-equipment.component";
import { ScrapMonitoringComponent } from "../../dialogs/scrap-monitoring/scrap-monitoring.component";
import { EcsComponent } from "../../dialogs/ecs/ecs.component";

export interface PeriodicElement {
  date: string;
  hr_coil_no: string;
  start_time: string;
  finish_time: string;
  delay: string;
  delay_reason: string;
  duration: string;
  scrap: string;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    date: "02/1/2019",
    hr_coil_no: "KUND864879",
    start_time: "10:15",
    finish_time: "11:45",
    delay: "00:15",
    delay_reason: "Test reason",
    duration: "01:30",
    scrap: "15 Kg",
    status: "In Progress",
  },
  {
    date: "02/1/2019",
    hr_coil_no: "KUND864879",
    start_time: "10:15",
    finish_time: "11:45",
    delay: "00:15",
    delay_reason: "Test reason",
    duration: "01:30",
    scrap: "15 Kg",
    status: "In Progress",
  },
  {
    date: "02/1/2019",
    hr_coil_no: "KUND864879",
    start_time: "10:15",
    finish_time: "11:45",
    delay: "00:15",
    delay_reason: "Test reason",
    duration: "01:30",
    scrap: "15 Kg",
    status: "In Progress",
  },
  {
    date: "02/1/2019",
    hr_coil_no: "KUND864879",
    start_time: "10:15",
    finish_time: "11:45",
    delay: "00:15",
    delay_reason: "Test reason",
    duration: "01:30",
    scrap: "15 Kg",
    status: "In Progress",
  },
];

@Component({
  selector: "app-production-status",
  templateUrl: "./production-status.component.html",
  styleUrls: ["./production-status.component.css"],
})
export class ProductionStatusComponent implements OnInit {
  dataSource: any[];
  displayedColumns: string[] = [
    "sr_no",
    "date",
    "hr_coil_no",
    "start_time",
    "finish_time",
    "delay",
    "delay_reason",
    "duration",
    "scrap",
    "status",
  ];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  constructor(
    breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {
    breakpointObserver.observe(["(max-width: 600px)"]).subscribe(result => {
      // For 1
      this.displayedColumns = result.matches
        ? [
            "sr_no",
            "date",
            "hr_coil_no",
            "start_time",
            "finish_time",
            "delay",
            "delay_reason",
            "duration",
            "scrap",
            "status",
          ]
        : [
            "sr_no",
            "date",
            "hr_coil_no",
            "start_time",
            "finish_time",
            "delay",
            "delay_reason",
            "duration",
            "scrap",
            "status",
          ];
    });
  }

  ngOnInit() {
    this.dataSource = ELEMENT_DATA;
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
