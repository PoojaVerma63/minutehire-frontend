import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaComponent, FaqComponent, PageHeroComponent } from '../shared/ui';

@Component({
  selector: 'app-features', standalone: true, imports: [RouterLink, PageHeroComponent, FaqComponent, CtaComponent], encapsulation: ViewEncapsulation.None,
  template: `
  <app-page-hero [lines]="['Company culture', 'with confidence.']" />

  <section class="hl-sec" style="padding-top:20px"><div class="hl-wrap center">
    <span class="hl-label rv">EXTRA FEATURES</span>
    <h2 class="hl-h2 rv">Seamless operations<br>and better outcomes.</h2>
    <p class="hl-sub rv">Say goodbye to spreadsheets and scattered systems. Keep detailed employee records.</p>
    <a class="btn rv" routerLink="/contact">Try Hirely <span class="ar">→</span></a>
    <div class="hl-bento">
      <article class="rv"><div class="bp"><img class="fl" src="https://framerusercontent.com/images/nY2fm4gyM4iz99RhcdYKVueoMo.webp" alt="Notifications"></div><span class="chip">Smarter</span><h4>Smart Notifications &amp; Reminders</h4><p>Stay ahead of critical tasks with automatic alerts and deadlines.</p></article>
      <article class="rv"><div class="bp orbit">
        <img class="o o1" src="https://framerusercontent.com/images/bvJMKavEtcrLaPaPRX8JyMd640o.svg" alt=""><img class="o o2" src="https://framerusercontent.com/images/vGUov3DkMVf4vCUp8MOhXsPMJW4.svg" alt=""><img class="o o3" src="https://framerusercontent.com/images/lJl7HaBY7F90EzEB9uPFgl8UnE.svg" alt=""><img class="o o4" src="https://framerusercontent.com/images/QkCBqWAj6PObEZkcFbzoVX053JU.svg" alt="">
        <div class="ctr"><img src="https://framerusercontent.com/images/ee7W7pKYMRf5ukrjvy0QTlk.svg" alt=""></div></div>
        <span class="chip">Integrates</span><h4>Plug-and-play integrations with your favorite tools</h4><p>Give employees control over their own data—from updating personal info to managing leave requests—all through a secure, intuitive portal.</p></article>
    </div>
  </div></section>

  <section class="hl-sec" style="padding-top:20px"><div class="hl-wrap center">
    <span class="hl-label rv">OUR NEW APP</span>
    <h2 class="hl-h2 rv">Everything you need,<br>where you need it.</h2>
    <div class="app3">
      <div class="ac3 g rv"><div class="card3"><b style="font-size:13px">Today Project Task</b><div style="margin-top:8px;color:#6b6f80">9 AM &nbsp; 10 AM &nbsp; 11 AM &nbsp; 12 AM</div>
        <div class="bar3 l"><i></i><i></i> User Research</div><div class="bar3 d"><i></i><i></i> Meeting with Client</div><div class="bar3 l" style="margin-left:40px"><i></i><i></i> User Research</div></div></div>
      <div class="ac3 rv"><div class="card3"><small style="color:#6b6f80">Hirely</small><b style="display:block;font-size:16px;font-weight:500">Staff Salary</b><div style="margin:8px 0;display:flex"><i class="av2" style="width:26px;height:26px"></i><i class="av2" style="width:26px;height:26px;margin-left:-6px;background:#9ab"></i><i class="av2" style="width:26px;height:26px;margin-left:-6px;background:#c98"></i>&nbsp;+7</div><span class="pay-btn">Automated Pay →</span></div></div>
      <div class="ac3 g rv"><div class="card3"><b style="font-size:13px">Employee Roles</b><div class="donut"><div><span><b>2340</b>Total Employee</span></div></div><div style="display:flex;justify-content:space-between;color:#6b6f80"><span>● 202 Onsite</span><span>○ 100 Remote</span></div></div></div>
    </div>
  </div></section>

  <section class="hl-sec" style="padding-top:20px"><div class="hl-wrap">
    <div class="people"><h2 class="hl-h2 left rv">All your people, All<br>in one place</h2><div class="rv"><p>Say goodbye to spreadsheets and scattered systems. Keep detailed employee records.</p><a class="btn gray" style="background:#5f6273" routerLink="/contact">Try Hirely <span class="ar">→</span></a></div></div>
    <div class="pcs">
      @for (c of cards; track c.t; let i = $index) {
        <button class="pcard rv" [class.open]="open === i" (click)="open = open === i ? -1 : i"><span class="pl">+</span><b>{{ c.t }}</b><p>{{ c.d }}</p></button>
      }
    </div>
  </div></section>

  <app-faq /><app-cta />`
})
export class FeaturesComponent {
  open = 0;
  cards = [
    { t: 'Smart employee onboarding', d: 'Guide new hires through documents, tasks and introductions automatically from day one.' },
    { t: 'Real-Time Attendance', d: 'Track check-ins, leave and time-off live, with alerts for anything that needs attention.' },
    { t: 'Performance Insights', d: 'Review goals, feedback and team progress in simple dashboards.' }
  ];
}
