import { Component } from "@angular/core";
import { Member } from "./members.component";

@Component({
  selector: "member-modal",
  template: `
    <div id="heading">
      <h1 class="thinFont2" style="font-size: 100px;">{{memberReference.name}}</h1>
      <img [src]="'/assets/profile-pics/' + memberReference.name.toLowerCase() + '.png'">
    </div>
    <hr>
    <div style="overflow: hidden;">
      <div style="width: 30%; float: left;">
        <h3 class="thinFont2">Roles</h3>
        <ul>
          <li *ngFor="let role of memberReference.roles">{{role}}</li>
        </ul>
      </div>
      <div style="width: 70%; float: left;">
        <h3 class="thinFont2">Bio</h3>
        <p>{{memberReference.bio}}</p>
      </div>
    </div>
  `,
  styles: [`    
    #heading {
      width: 100%;
      overflow: hidden;
      text-align: center;
    }
    
    #heading img {
      width: 100%;
      height: auto;
    }
    
    h3 {
      text-align: center;
    }
  `]
})
export class MemberModalComponent {
  memberReference: Member;
}
