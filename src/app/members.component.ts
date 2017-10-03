import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MemberModalComponent } from "./member-modal.component";

export class Member {
  constructor (_name: string, _roles: string[], _bio: string) {
    this.name = _name;
    this.roles = _roles;
    this.bio = _bio;
  }

  name: string;
  roles: string[];
  bio: string;
}

@Component({
  selector: "members",
  template: `
    <div id="container">
      <div class="memberPanel" *ngFor="let member of members" [style.background-image]="'url(/assets/profile-pics/' + member.name.toLowerCase() + '.png)'" (click)="openMember(member)">
        <p class="thinFont1" style="color: white; vertical-align: center; font-size: 50px;">{{member.name}}</p>
      </div>
    </div>
  `,
  styles: [`
    #container {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: black;
      position: relative;
    }

    .memberPanel {
      width: 25%;
      height: 33.33%;
      background-color: white;
      float: left;
      overflow: hidden;
      background-position: center;
      background-size: 100% auto;
      display: flex;
      align-items: flex-end;
      transition: all .1s ease-in-out;
    }

    p {
      margin: 0;
      background-color: rgba(128, 128, 128, 0.6);
    }

    .memberPanel:hover {
      background-size: 105% auto;
    }
  `]
})
export class MembersComponent {
  constructor(private modalService: NgbModal) {}

  members: Member[] = [
    new Member("Makiah", ["Lead Programmer"], "After crash-landing on Earth, Makiah wandered dazed into a nearby building, where earthlings mistook him for a programmer.  3 years later, they still have no idea."),
    new Member("Joe", ["Comms Lead"], "Joseph Maloyan is an 11th grader at Natick High School. As any typical teenager, he enjoys walking his dog, spending time with friends, destroying all his adversaries in video games and riveting games of chess, and appreciating good memes. He also holds a strong interest in Math, Engineering, and Physics. He currently plans to major in electrical or computer engineering."),
    new Member("Sean", ["Tech Lead"], "Sean Maule is a junior at Natick High School. He joined RoboNatick as a sophomore because he was curious about how robots were designed and built. This is his first year as a Technical Leader but his second year on the team Hank's Tanks. Sean enjoys designing, building, and testing parts for the team’s robot. On most days, Sean listens to music or practices on his piano. He wishes to study chemistry or environmental science so he can someday become a scientist."),
    new Member("Ian", ["Admin"], "Something I dunno"),
    new Member("Ben", ["3D Printing Guru"], "Ben Jennings is a​ ​sophomore at Natick High School. This being his second year involved in RoboNatick, he has found enjoyment in working in a team environment and 3D printing. Outside of robotics, Ben enjoys photography and ​plays​ ​three instruments. He is currently a Life Scout in Natick's Troop 1775 and is working towards earning his Eagle Scout rank."),
    new Member("Anthony", ["Programmer"], "Just last year I semi-joined robotics. Only now, I am a full member and I'm ready to tackle this year. Especially, I'm excited for learning how to be a leader for next year. So my job on the team is to program, which I'm currently doing alongside Makiah and Jordan. Under Makiah's lead, I feel that we're going to make a great robot. Currently I'm still learning the workflow for programming the robot, but I'm becoming more independent. Keyword: learning. Someday I'll get this all down."),
    new Member("Danny", ["Builder"], "Something I dunno"),
    new Member("Gabe", ["Builder"], "Something I dunno"),
    new Member("Jordan", ["Programmer"], "Something I dunn"),
    new Member("Alex", ["Builder"], "Something I dunno")
  ];

  openMember(member: Member) {
    const modalRef = this.modalService.open(MemberModalComponent, {size: "lg"});
    modalRef.componentInstance.memberReference = member;
  }
}
