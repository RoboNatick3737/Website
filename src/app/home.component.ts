/**
 * The landing page for the app, which tells the user what the app does, what the purpose of the appis, and why
 */
import { Component } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";
import { Router } from "@angular/router";

@Component({
  selector: "home",
  template: `
    <div class="parallax">
      <!-- Title -->
      <div id="titleSection" class="parallax__group">
        <div class="parallax__layer parallax__layer--base"
             style="background: url('/assets/old-season/finalrobot/button_pusher.jpg') center; background-size: cover;">
          <div class="centeredContent">
            <div>
              <div class="orangePanel">
                <h1 class="thinFont1 scaleableText">HANK'S TANKS</h1>
              </div>
              <div class="lightPanel">
                <p class="thinFont2 scaleableText">We're an FTC team from Natick, MA, and we've
                  got swagger like you wouldn't believe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Our Team -->
      <div id="teamSection" class="parallax__group">
        <div class="parallax__layer parallax__layer--base" style="pointer-events: none">
          
          <!-- Currently not active since not necessary. -->
          <div class="centeredContent" style="background-color: rgba(0,0,0,0.33); display: none;">
            <div style="background-color: rgba(255,255,255,0.26); border-radius: 20px;">
              <p class="thinFont1"></p>
            </div>
          </div>
        </div>

        <div class="parallax__layer parallax__layer--back">
          <members></members>
        </div>
      </div>

      <!-- Our Robots -->
      <div id="robotsSection" class="parallax__group">
        <div class="parallax__layer parallax__layer--fore">
          <!--<div class="centeredContent">-->
            <!--<div class="lightPanel clickablePanel {{robotsExpansion === 'contract' ? 'animateOnHoverPanel' : ''}}" (click)="robotsExpansion = 'expand'" [@clickablePanelExpansion]="robotsExpansion">-->
              <!--<h2 class="thinFont1 scaleableText">Our Bots</h2>-->
            <!--</div>-->
          <!--</div>-->
        </div>
        <div class="parallax__layer parallax__layer--base">
          <robots></robots>
        </div>
      </div>

      <!-- Season Progression -->
      <div id="seasonSection" class="parallax__group">
        <div class="parallax__layer parallax__layer--base">
          <!--<div class="centeredContent">-->
            <!--<div class="darkPanel clickablePanel {{seasonExpansion === 'contract' ? 'animateOnHoverPanel' : ''}}" (click)="seasonExpansion = 'expand'" [@clickablePanelExpansion]="seasonExpansion">-->
              <!--<h2 class="thinFont1 scaleableText">Season</h2>-->
            <!--</div>-->
          <!--</div>-->
        </div>
        <div class="parallax__layer parallax__layer--back">
          <season></season>
        </div>
      </div>

      <!-- Outreach -->
      <div id="outreachSection" class="parallax__group">
        <div class="parallax__layer parallax__layer--fore">
          <!--<div class="centeredContent">-->
            <!--<div class="lightPanel clickablePanel {{outreachExpansion === 'contract' ? 'animateOnHoverPanel' : ''}}" (click)="outreachExpansion = 'expand'" [@clickablePanelExpansion]="outreachExpansion">-->
              <!--<h2 class="thinFont1 scaleableText">Outreach</h2>-->
            <!--</div>-->
          <!--</div>-->
        </div>
        <div class="parallax__layer parallax__layer--base">
          <div class="imagePanel" style="background: url('/assets/old-season/outreach/hospital/pic5.jpg') center; background-size: cover;"></div>
        </div>
      </div>

      <!-- Resources -->
      <div id="resourceSection" class="parallax__group">
        <div class="parallax__layer parallax__layer--base">
          <div class="centeredContent">
            <div class="darkPanel clickablePanel {{resourceExpansion === 'contract' ? 'animateOnHoverPanel' : ''}}" (click)="resourceExpansion = 'expand'" [@clickablePanelExpansion]="resourceExpansion">
              <h2 class="thinFont1 scaleableText">Resources</h2>
            </div>
          </div>
        </div>
        <div class="parallax__layer parallax__layer--back">
          <div class="imagePanel" style="background: url('/assets/code-screenshots/code1.png') center; background-size: cover;"></div>
        </div>
      </div>

      <!-- Contact Us -->
      <div id="contactUsSection" class="parallax__group">
        <div class="parallax__layer parallax__layer--base" style="background: #33ec4a url('/assets/old-season/outreach/carnival/pic1.jpg'); background-size: cover; background-position: center;">
          <div class="centeredContent">
            <div class="lightPanel">
              <h2 class="thinFont1 scaleableText">Contact Us!</h2>
              <a class="thinFont1 scaleableText" href="mailto:'robonatick3737@gmail.com'">robonatick3737@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    ::-webkit-scrollbar {
      display: none;
    }

    /* Parallax base styles
    --------------------------------------------- */

    .parallax {
      height: 500px; /* fallback for older browsers */
      height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-perspective: 300px;
      perspective: 300px;
    }

    .parallax__group {
      position: relative;
      height: 500px; /* fallback for older browsers */
      height: 100vh;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    .parallax__layer {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .parallax__layer--fore {
      -webkit-transform: translateZ(90px) scale(.7);
      transform: translateZ(90px) scale(.7);
      z-index: 1;
    }

    .parallax__layer--base {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      z-index: 4;
    }

    .parallax__layer--back {
      -webkit-transform: translateZ(-300px) scale(2);
      transform: translateZ(-300px) scale(2);
      z-index: 3;
    }

    .parallax__layer--deep {
      -webkit-transform: translateZ(-600px) scale(3);
      transform: translateZ(-600px) scale(3);
      z-index: 2;
    }

    /* demo styles
 --------------------------------------------- */

    body, html {
      overflow: hidden;
    }

    body {
      font: 100% / 1.5 Arial;
    }

    * {
      margin: 0;
      padding: 0;
    }

    .parallax {
      font-size: 200%;
    }

    /* centre the content in the parallax layers */
    .centeredContent {
      width: 100%;
      height: 100%;
      
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* style the groups
    --------------------------------------------- */

    #titleSection {
      z-index: 5; /* slide over group 2 */
    }

    #teamSection {
      z-index: 3; /* slide under groups 1 and 3 */
    }

    #teamSection .parallax__layer--back {
      background: rgb(255, 255, 255);
    }

    #robotsSection {
      z-index: 4; /* slide over group 2 and 4 */
    }

    #robotsSection .parallax__layer--base {
      background: rgb(153, 216, 101);
    }

    #seasonSection {
      z-index: 2; /* slide under group 3 and 5 */
    }

    #seasonSection .parallax__layer--deep {
      background: rgb(184, 223, 101);
    }

    #outreachSection {
      z-index: 3; /* slide over group 4 and 6 */
    }

    #outreachSection .parallax__layer--base {
      background: rgb(214, 229, 100);
    }

    #resourceSection {
      z-index: 2; /* slide under group 5 and 7 */
    }

    #resourceSection .parallax__layer--back {
      background: rgb(245, 235, 100);
    }

    #contactUsSection {
      z-index: 3; /* slide over group 7 */
    }

    #contactUsSection .parallax__layer--base {
      background: rgb(245, 235, 100);
    }

    /* Custom classes */
    .darkPanel {
      text-align: center;
      
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 20px;
      padding: 30px;
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
    }

    .darkPanel h1, .darkPanel h2, .darkPanel h3, .darkPanel p {
      color: white;
    }

    .orangePanel {
      text-align: center;
      
      background-color: rgba(225, 159, 0, 0.8);
      border-radius: 20px;
      padding: 30px;
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
    }

    .orangePanel h1, .orangePanel h2, .orangePanel h3, .orangePanel p {
      color: white;
    }

    .lightPanel {
      text-align: center;
      
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      padding: 30px;
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
    }

    .lightPanel h1, .lightPanel h2, .lightPanel h3, .lightPanel p {
      color: black;
    }

    .imagePanel {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: white;
    }

    .clickablePanel {
      opacity: 1;
      cursor: default;
    }
    
    .animateOnHoverPanel {
      transition: all .2s ease-in-out;
    }

    .animateOnHoverPanel:hover {
      transform: scale(1.1);
    }
    
    h1.scaleableText {
      font-size: 11vw;
    }
    
    h2.scaleableText {
      font-size: 10vw;
    }
    
    p.scaleableText {
      font-size: 3vw;
    }

    a.scaleableText {
      font-size: 3vw;
    }
  `],
  animations: [
    trigger("clickablePanelExpansion", [
      state("expand", style({
        "opacity": "0"
      })),
      state("contract", style({
        "opacity": "1"
      })),
      transition("expand => contract", animate("400ms ease-in-out")),
      transition("contract => expand", animate("400ms ease-in-out"))
    ])
  ]
})
export class HomeComponent {
  robotsExpansion = "contract";
  seasonExpansion = "contract";
  outreachExpansion = "contract";
  resourceExpansion = "contract";
}
