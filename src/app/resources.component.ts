import {Component} from "@angular/core";

@Component({
  selector: "resources",
  template: `
    <div id="resourcesContainer">
      <a href="https://github.com/robonatick3737"><img src="/assets/logos/github.png" class="resourceLogo"></a>
      <a href="https://www.instagram.com/ftc3737"><img src="/assets/logos/instagram.png" class="resourceLogo"></a>
      <a href="https://twitter.com/3737hankstanks"><img src="/assets/logos/twitter.png" class="resourceLogo"></a>
      <a href="https://www.youtube.com/channel/UCUkntPWY0UKNabeFXzWi7jQ"><img src="/assets/logos/youtube.png" class="resourceLogo"></a>
    </div>
  `,
  styles: [`
    #resourcesContainer {
      width: 100%;
      height: 100%;
      text-align: center;
    }
    
    .resourceLogo {
      height: 15vw;
      min-height: 120px;
      width: auto;
    }
  `]
})
export class ResourcesComponent {
}
