// Modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

// Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { RobotsComponent } from "./robots.component";
import { OutreachComponent } from "./outreach.component";
import { SeasonComponent } from "./season.component";
import { ResourcesComponent } from "./resources.component";
import { ContactComponent } from "./contact.component";
import { MembersComponent } from "./members.component";
import { MemberModalComponent } from "./member-modal.component";

// Services
// import service from service file

@NgModule({
  imports:      [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    RobotsComponent,
    SeasonComponent,
    OutreachComponent,
    ResourcesComponent,
    ContactComponent,
    MembersComponent,
    MemberModalComponent
  ],
  entryComponents: [
    // Components that are added mid-run (like modals)
    MemberModalComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
