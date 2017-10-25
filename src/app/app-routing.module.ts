import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { RobotsComponent } from "./robots.component";
import { OutreachComponent } from "./outreach.component";
import { SeasonComponent } from "./season.component";
import { ResourcesComponent } from "./resources.component";
import { ContactComponent } from "./contact.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
