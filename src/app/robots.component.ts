import {Component} from "@angular/core";

@Component({
  selector: "robots",
  template: `    
    <!-- Old Bots -->
    <div class="botsContainer">
      <!-- New -->
      <div class="botPanel" style="background: url('/assets/old-season/finalrobot/full_robot.jpg') center; background-size: cover;">
        <div class="botCaptionContainer">
          <p class="thinFont1">Guillermo</p>
          <ul>
            <li class="thinFont1">6-wheeled Tank Drive</li>
            <li class="thinFont1">Dual-flywheel shooters</li>
            <li class="thinFont1">Heckin good code</li>
          </ul>
        </div>
      </div>
      
      <!-- Prelim -->
      <div class="botPanel" style="background: url('/assets/old-season/robot/full_robot.jpg') center; background-size: cover;">
        <div class="botCaptionContainer">
          <p class="thinFont1">José</p>
          <ul>
            <li class="thinFont1">4-wheeled Tank Drive</li>
            <li class="thinFont1">Corner goal proficient</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .botsContainer {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    
    .botCaptionContainer {
      margin-right: 20px; 
      text-align: right;
    }

    .botPanel {
      width: 50%;
      height: 100%;
      float: left;

      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
    
    p,li {
      color: white;
    }
    
    p {
      font-size: 5vw;
    }
    
    li {
      font-size: 2vw;
    }
  `]
})
export class RobotsComponent {
}
