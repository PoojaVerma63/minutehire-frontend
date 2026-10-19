import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaComponent, PageHeroComponent } from '../shared/ui';

@Component({
  selector: 'app-company', standalone: true, imports: [RouterLink, PageHeroComponent, CtaComponent], encapsulation: ViewEncapsulation.None,
  template: `
  <app-page-hero [lines]="['Your Growth Is', 'Our Mission']" />
  <section class="hl-wrap"><div class="c2"><div class="ph rv" style="--img:url(assets/img/company-hero.jpg)"></div><div class="gcard rv"><span class="chip">Seamless Solutions</span></div></div></section>

  <section class="hl-sec"><div class="hl-wrap">
    <div class="head2"><div><span class="hl-label left rv">APP</span><h2 class="hl-h2 left rv">We offer full office<br>help and support</h2></div>
      <div class="rv"><p>Say goodbye to spreadsheets and scattered systems. Keep detailed employee records.</p><a class="btn gray" style="background:#5f6273" routerLink="/contact">Try Hirely <span class="ar">→</span></a></div></div>
    <div class="st3">
      <div class="stc rv"><small>User</small><b>155+</b></div>
      <div class="stc rv"><small>Impact</small><b>98%</b></div>
      <div class="stc rv"><small>Support</small><b>24/7</b></div>
    </div>
  </div></section>

  <section class="hl-sec" style="padding-top:20px"><div class="hl-wrap center">
    <span class="hl-label rv">APP</span><h2 class="hl-h2 rv">Values That Shape<br>Every Step We Take</h2>
    <p class="hl-sub rv">Guided by Purpose, Driven by Values Every action is rooted in what we believe.</p>
    <a class="btn rv" routerLink="/contact">Try Hirely <span class="ar">→</span></a>
    <div class="vl3" style="margin-top:56px;text-align:left">
      <div class="vc rv"><span class="vi">💡</span><div><h4>Simplicity</h4><p>We make complex HR work feel effortless.</p></div></div>
      <div class="vc rv"><span class="vi">▭</span><div><h4>Transparency</h4><p>Clear data and honest communication, always.</p></div></div>
      <div class="vc rv"><span class="vi">⬡</span><div><h4>Empowerment</h4><p>Tools that give every team more control.</p></div></div>
    </div>
  </div></section>

  <section class="hl-sec" style="padding-top:20px"><div class="hl-wrap jr">
    <div><div class="lg rv"></div><h2 class="hl-h2 left rv">Established in 2008<br>our journey began</h2></div>
    <div class="ph rv" style="--img:url(assets/img/company-journey.jpg)"></div>
  </div></section>

  <section class="hl-sec" style="padding-top:20px"><div class="hl-wrap center">
    <h2 class="hl-h2 rv">Values That Shape<br>Every Step We Take</h2>
    <p class="hl-sub rv">Guided by Purpose, Driven by Values Every action is rooted in what we believe.</p>
    <a class="btn rv" routerLink="/contact">Try Hirely <span class="ar">→</span></a>
    <div class="team">
      @for (m of team; track m.n; let i = $index) { <div class="mem rv"><div class="ph" [style.--img]="'url(assets/img/team-' + (i + 1) + '.jpg)'"></div><b>{{ m.n }}</b><small>{{ m.r }}</small></div> }
    </div>
  </div></section>
  <app-cta />`
})
export class CompanyComponent {
  team = [{ n: 'James Alexander', r: 'HR Manager' }, { n: 'Carlos Eduardo', r: 'Recruitment Specialist' }, { n: 'Hiroshi Tanaka', r: 'Training Manager' }, { n: 'Jean-Pierre', r: 'Compensation Analyst' }];
}
