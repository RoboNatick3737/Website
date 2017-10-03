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
             style="background: url('/assets/old-season/finalrobot/full_robot.jpg') center; background-size: 100% auto;">
          <div class="centeredContent">
            <div class="orangePanel">
              <h1 class="thinFont1 panelHeading" style="font-size: 100px;">HANK'S TANKS</h1>
            </div>
            <div class="lightPanel">
              <p class="thinFont2" style="color: black; font-size: 30px;">We're an FTC team from Natick, MA, and we've
                got swagger like you wouldn't believe.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Our Team -->
      <div id="teamSection" class="parallax__group">
        <div class="parallax__layer parallax__layer--base" style="pointer-events: none">
          <div class="centeredContent" style="background-color: rgba(0,0,0,0.33);" *ngIf="currentlySelected !== ''">
            <div style="background-color: rgba(255,255,255,0.26); border-radius: 20px;">
              <p class="thinFont1 panelHeading"></p>
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
          <div class="centeredContent">
            <div class="lightPanel clickablePanel" (click)="routeTo('robots')">
              <h1 class="thinFont1" style="color: black; font-size: 100px;">Our Robots</h1>
            </div>
          </div>
        </div>
        <div class="parallax__layer parallax__layer--base">
          <div class="imagePanel">
            <img src="/assets/old-season/robot/full_robot.jpg">
          </div>
        </div>
      </div>

      <!-- Season Progression -->
      <div id="seasonSection" class="parallax__group">
        <div class="parallax__layer parallax__layer--base">
          <div class="centeredContent">
            <div class="darkPanel clickablePanel" (click)="routeTo('season')">
              <p class="thinFont1 panelHeading">Season Progression</p>
            </div>
          </div>
        </div>
        <div class="parallax__layer parallax__layer--back">
          <div class="imagePanel">
            <img src="/assets/old-season/competitions/states/pic1.jpg">
          </div>
        </div>
      </div>

      <!-- Outreach -->
      <div id="outreachSection" class="parallax__group">
        <div class="parallax__layer parallax__layer--fore">
          <div class="centeredContent">
            <div class="lightPanel clickablePanel" (click)="routeTo('outreach')">
              <p class="thinFont1 panelHeading">Outreach</p>
            </div>
          </div>
        </div>
        <div class="parallax__layer parallax__layer--base">
          <div class="imagePanel">
            <img src="/assets/old-season/outreach/hospital/pic5.jpg">
          </div>
        </div>
      </div>

      <!-- Resources -->
      <div id="resourceSection" class="parallax__group">
        <div class="parallax__layer parallax__layer--base">
          <div class="centeredContent">
            <div class="darkPanel clickablePanel" (click)="routeTo('resources')">
              <p class="thinFont1 panelHeading">Resources</p>
            </div>
          </div>
        </div>
        <div class="parallax__layer parallax__layer--back">
          <div class="imagePanel">
            <img src="/assets/code-screenshots/code1.png">
          </div>
        </div>
      </div>

      <!-- Contact Us -->
      <div id="contactUsSection" class="parallax__group">
        <div class="parallax__layer parallax__layer--base">
          <div class="centeredContent">
            <div class="lightPanel clickablePanel" (click)="routeTo('contact')">
              <p class="thinFont1 panelHeading">Contact Us!</p>
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
      text-align: center;
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 100%;
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
      background: #33ec4a url("/assets/old-season/outreach/carnival/pic1.jpg");
      background-size: 140% auto;
      background-position: center;
    }

    /* Custom classes */
    .darkPanel {
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 20px;
      padding: 30px;
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
    }

    .darkPanel .panelHeading {
      color: white;
    }

    .orangePanel {
      background-color: rgba(225, 159, 0, 0.8);
      border-radius: 20px;
      padding: 30px;
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
    }

    .orangePanel .panelHeading {
      color: white;
    }

    .lightPanel {
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      padding: 30px;
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
    }

    .lightPanel .panelHeading {
      color: black;
    }

    .imagePanel {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: white;
    }

    .panelHeading {
      font-size: 90px;
    }

    .imagePanel > img {
      width: 100%;
      height: auto;

      background-size: 100% auto;
      background-position: center;
    }

    .clickablePanel {
      opacity: 1;
      cursor: default;
      transition: all .2s ease-in-out;
    }

    .clickablePanel:hover {
      transform: scale(1.1);
    }
  `],
  animations: [
  ]
})
export class HomeComponent {
  constructor (private router: Router) {}

  currentlySelected: string = "";

  routeTo(route: string) {
    this.router.navigate([route]);
  }
}
