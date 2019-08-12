import { Component, OnInit } from "@angular/core";
import * as scrapData from "./scrap-data";
import * as replacementData from "./replacement-data";
import * as massBalData from "./mass-balancing-data";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  scrapSource: LocalDataSource;
  replacementSource: LocalDataSource;
  massBalSource: LocalDataSource;

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
