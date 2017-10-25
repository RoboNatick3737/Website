import {Component} from "@angular/core";

@Component({
  selector: "outreach",
  template: `
    <div id="outreachContainer">
      <div class="outreachItem" style="background: url('/assets/old-season/outreach/carnival/pic2.jpg') center; background-size: cover;">
        <p class="outreachCaption thinFont1">Boston GreenFest</p>
      </div>

      <div class="outreachItem" style="background: url('/assets/old-season/outreach/hospital/pic1.jpg') center; background-size: cover;">
        <p class="outreachCaption thinFont1">Boston Children's Hospital</p>
      </div>

      <div class="outreachItem" style="background: url('/assets/old-season/outreach/ipg/pic2.jpg') center; background-size: cover;">
        <p class="outreachCaption thinFont1">IPG Photonics</p>
      </div>

      <div class="outreachItem" style="background: url('/assets/old-season/outreach/landandsea/pic2.jpg') center; background-size: cover;">
        <p class="outreachCaption thinFont1">RoboNatick Land & Sea Summer Camp</p>
      </div>

      <div class="outreachItem" style="background: url('/assets/old-season/outreach/library/pic2.jpg') center; background-size: cover;">
        <p class="outreachCaption thinFont1">Morse Institute Library</p>
      </div>

      <div class="outreachItem" style="background: url('/assets/old-season/outreach/natickdays/pic2.jpg') center; background-size: cover;">
        <p class="outreachCaption thinFont1">Natick Days</p>
      </div>
    </div>
  `,
  styles: [`
    #outreachContainer {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    
    .outreachItem {
      width: 33.3333%;
      height: 50%;
      float: left;
      
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
    }
    
    p {
      font-size: 2vw;
      color: white;
      margin: 20px;
    }
  `]
})
export class OutreachComponent {
}
