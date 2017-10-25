import {Component} from "@angular/core";

@Component({
  selector: "season",
  template: `
    <div class="seasonContainer">
      <div class="seasonEvent" style="background: url('/assets/old-season/competitions/gann/pic1.jpg') center; background-size: cover;">
        <p>Qualifiers</p>
      </div>
      <div class="seasonEvent" style="background: url('/assets/old-season/competitions/states/pic3.jpg') center; background-size: cover;">
        <p>States</p>
      </div>
      <div class="seasonEvent" style="background: url('/assets/old-season/competitions/supers/pic3.jpg') center; background-size: cover;">
        <p>Super-Regionals</p>
      </div>
      <div class="seasonEvent" style="background: url('/assets/old-season/competitions/worlds/pic8.jpg') center; background-size: cover;">
        <p>Worlds</p>
      </div>
    </div>
  `,
  styles: [`
    .seasonContainer {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    
    .seasonEvent {
      width: 50%;
      height: 50%;
      float: left;
      
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
    
    p {
      margin-right: 20px;
      font-size: 3vw;
      color: white;
    }
  `]
})
export class SeasonComponent {
}
