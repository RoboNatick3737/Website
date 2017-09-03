import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { RobotsComponent } from "./robots.component";
import { OutreachComponent } from "./outreach.component";
import {SeasonComponent} from "./season.component";
import {ResourcesComponent} from "./resources.component";
import {ContactComponent} from "./contact.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "robots", component: RobotsComponent },
  { path: "outreach", component: OutreachComponent },
  { path: "season", component: SeasonComponent },
  { path: "resources", component: ResourcesComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
