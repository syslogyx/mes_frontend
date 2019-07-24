import { Routes } from "@angular/router";
import { CodeGroupComponent } from "./code-group/code-group.component";
import { CampaignComponent } from "./campaign/campaign.component";
import { DprTargetComponent } from "./dpr-target/dpr-target.component";
import { ElongationComponent } from "./elongation/elongation.component";
import { LeadTimeComponent } from "./lead-time/lead-time.component";
import { ProcessFamilyComponent } from "./process-family/process-family.component";
import { AddCodeGroupComponent } from "./add_page/add-code-group/add-code-group.component";
import { AddCampaignComponent } from "./add_page/add-campaign/add-campaign.component";
export const MasterRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "code_group",
        component: CodeGroupComponent,
      },
      {
        path: "code_group/add",
        component: AddCodeGroupComponent,
      },
      {
        path: "code_group/edit/:id",
        component: AddCodeGroupComponent,
      },
      {
        path: "campaign",
        component: CampaignComponent,
      },
      {
        path: "add_campaign",
        component: AddCampaignComponent,
      },
      {
        path: "dpr_target",
        component: DprTargetComponent,
      },
      {
        path: "elongation",
        component: ElongationComponent,
      },
      {
        path: "lead_time",
        component: LeadTimeComponent,
      },
      {
        path: "process_family",
        component: ProcessFamilyComponent,
      },
    ],
  },
];
