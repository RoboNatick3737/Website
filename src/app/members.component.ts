import {Component} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MemberModalComponent} from "./member-modal.component";

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
    <table class="thinFont1" id="headshotTable" style="width: 100%; height: 100%;">
      <tr>
        <td (click)="openMember(members[0])" style="background: url('assets/profile-pics/makiah.png') center no-repeat; background-size: auto 100%;">Makiah</td>
        <td (click)="openMember(members[1])" style="background: url('assets/profile-pics/joe.png') center no-repeat; background-size: auto 100%;">Joe</td>
        <td (click)="openMember(members[2])" style="background: url('assets/profile-pics/sean.png') center no-repeat; background-size: auto 100%;">Sean</td>
        <td (click)="openMember(members[3])" style="background: url('assets/profile-pics/ian.png') center no-repeat; background-size: auto 100%;">Ian</td>
      </tr>
      <tr>
        <td (click)="openMember(members[4])" style="background: url('assets/profile-pics/ben.png') center no-repeat; background-size: auto 100%;">Ben</td>
        <td (click)="openMember(members[5])" style="background: url('assets/profile-pics/anthony.png') center no-repeat; background-size: auto 100%;">Anthony</td>
        <td (click)="openMember(members[6])" style="background: url('assets/profile-pics/danny.png') center no-repeat; background-size: auto 100%;">Danny</td>
        <td (click)="openMember(members[7])" style="background: url('assets/profile-pics/danny.png') center no-repeat; background-size: auto 100%;">Gabe</td>
      </tr>
      <tr>
        <td (click)="openMember(members[8])" style="background: url('assets/profile-pics/danny.png') center no-repeat; background-size: auto 100%;">Jordan</td>
        <td>Someone</td>
        <td>Someone</td>
        <td>Someone</td>
      </tr>
    </table>`,
  styles: [`    
    #headshotTable td {
      text-align: center;
      vertical-align: bottom;
      color: white;

      background-size: 100% auto;
      background-position: center;

      opacity: 1;
      width: 25%;
    }

    #headshotTable td:hover {
      opacity: 0.8;
    }

    #headshotTable td:active {
      opacity: 0.6;
    }`]
})
export class MembersComponent {
  constructor(private modalService: NgbModal) {}

  members: Member[] = [
    new Member("Makiah", ["Lead Programmer"], "Having Fun Biyatch"),
    new Member("Joe", ["Comms Lead"], "Something else"),
    new Member("Sean", ["Tech Lead"], "Something I dunno"),
    new Member("Ian", ["Admin"], "Something I dunno"),
    new Member("Ben", ["3D Printing Guru"], "Something I dunno"),
    new Member("Anthony", ["Programmer"], "Something I dunno"),
    new Member("Danny", ["Builder"], "Something I dunno"),
    new Member("Gabe", ["Builder"], "Something I dunno"),
    new Member("Jordan", ["Programmer"], "Something I dunno"),
  ];

  openMember(member: Member) {
    const modalRef = this.modalService.open(MemberModalComponent, {size: "lg"});
    modalRef.componentInstance.memberReference = member;
  }
}
