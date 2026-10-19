import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ARTICLES, CtaComponent, FaqComponent, KfSyncDirective } from '../shared/ui';

@Component({
  selector: 'app-home-v2', standalone: true, imports: [RouterLink, FaqComponent, CtaComponent, KfSyncDirective], encapsulation: ViewEncapsulation.None,
  template: `
  <section class="v2h"><div class="hl-wrap g">
    <div>
      <span class="pill fade">Simple and integrated HR tools</span>
      <h1><span class="ln"><span>Super tools for</span></span><span class="ln"><span>every big team</span></span></h1>
      <p class="lead fade d3">Simple payroll, integrated HR tools, and expert support, all in one place.</p>
      <div class="row fade d4" style="justify-content:flex-start"><a class="btn lime" routerLink="/login">Try Hirely for free</a><a class="btn white" routerLink="/pricing">See Pricing</a></div>
    </div>
    <div class="v2r fade d5">
      <div class="phone">
        <div class="ph-top"><span class="av2"></span><div><small>Welcome Back,</small><b>Mark Hussain</b></div></div>
        <div class="kg">
          <div class="k"><i style="background:#8b7bff">👥</i><b>453</b> Employee<br>+10 from last week</div>
          <div class="k"><i style="background:#4fb7ff">⏱</i><b>30 day</b> Time to hire<br>+10 from last week</div>
          <div class="k"><i style="background:#2cc9a8">✔</i><b>234</b> Attendance<br>+10 from last week</div>
          <div class="k"><i style="background:#ff6fae">%</i><b>2.32%</b> Performance<br>+10 from last week</div>
        </div>
        <div class="tbl2"><div class="r"><span>Attendance Overview</span><span>See All</span></div>
          <div class="r"><span>Herry Kane</span><span>75%</span></div><div class="r"><span>Herry Brooks</span><span>50%</span></div><div class="r"><span>Ross Teylar</span><span>25%</span></div></div>
      </div>
      <div class="fc a"><small>HR Management</small><b>Market Management</b><span style="font-size:13px">3/4</span> <span class="tagh">High</span></div>
      <div class="fc b"><span class="dot"></span>Automated Pay</div>
    </div>
  </div></section>

  <section class="hl-sec"><div class="hl-wrap center">
    <span class="chipw rv">App Feature</span>
    <h2 class="hl-h2 rv">Seamless HR &amp; Payroll<br>solutions with Hirely</h2>
    <p class="hl-sub rv">Concepts to fit your HR management app</p>
    <div class="v2k" kfSync style="margin-top:70px;text-align:left">
      <div class="kl">
        <div class="acc">
          <button class="acc-i on"><b>All-in-One Dashboard</b><p>Manage employee records, payroll, benefits, and time-off requests from a single, easy-to-use platform.</p></button>
          <button class="acc-i"><b>Automated Payroll Processing</b><p>Run accurate payroll in minutes with automatic deductions, bonuses and tax rules.</p></button>
          <button class="acc-i"><b>Smart HR Tools</b><p>Hiring, onboarding and performance reviews working together in one place.</p></button>
        </div>
        <a class="btn lime" style="margin-top:34px" routerLink="/login">Try Hirely for free</a>
      </div>
      <div style="display:flex;flex-direction:column;gap:40px">
        <div class="kp"><img src="https://framerusercontent.com/images/3G1rfzUNYT3vWyVXOhlq5p5r8.webp?width=1600" alt="Dashboard" style="object-fit:cover;object-position:top left"></div>
        <div class="kp"><div><div class="mini"><span style="font-size:26px">👥</span><br><b>453</b> Employee<small>+10 from last week</small></div><div class="pillg"><span class="dot"></span>Automated Pay</div></div></div>
        <div class="kp"><div class="mini" style="text-align:left;min-width:260px"><small>HR Management</small><b style="font-size:17px">Market Management System Research</b><small style="margin-top:8px">👁 6 &nbsp; 💬 3 <span class="tagh">High</span></small></div></div>
      </div>
    </div>
  </div></section>

  <section class="hl-wrap nar"><div class="t2">
    <div><img src="https://framerusercontent.com/images/JrOUAUQNW3Tnxjlxrkf5xkNeAI.svg" alt="attracts" height="22" class="rv">
      <p class="rv">Hirely has completely transformed how we manage recruitment. From automated job postings to streamlined interview scheduling, everything is just so intuitive. We've cut our time-to-hire in half and improved candidate experience dramatically. Highly recommend it to any HR team looking to modernize.</p>
      <div class="who rv"><span class="av2"></span><div><b>Leo Geidt</b><small>Founder</small></div></div></div>
    <div class="ph rv" style="--img:url(assets/img/testimonial.jpg)"><button class="arr l" aria-label="Previous">←</button><button class="arr r" aria-label="Next">→</button></div>
  </div></section>

  <section class="pay2"><div class="hl-wrap nar">
    <div class="top"><div><span class="chipw g rv">App Feature</span><h2 class="hl-h2 rv">Simplify Payroll<br>like never before</h2></div><a class="btn gray rv" style="background:#5f6273" routerLink="/contact">Try Hirely <span class="ar">→</span></a></div>
    <div class="cards">
      <div class="pcd rv"><div class="in"><span style="font-size:26px">📈</span><br><b>2.32%</b> Performance<br><small style="color:#6b6f80">+10 from last week</small></div></div>
      <div class="pcd rv"><div style="text-align:center"><div style="font-size:22px">Salary</div><small style="color:#6b6f80">100% Paid</small><br><span class="pillg" style="background:#e4fbcb;margin-top:12px"><span class="dot"></span>Timely Payment</span></div></div>
    </div>
    <div class="ico2"><div><div style="font-size:22px">◎</div><h4>Accurate Payments</h4><p>Salaries, deductions and bonuses calculated automatically.</p></div><div><div style="font-size:22px">＄</div><h4>Timely Payroll</h4><p>Every employee paid on time, every time.</p></div></div>
  </div></section>

  <section class="hl-sec"><div class="hl-wrap center">
    <h2 class="hl-h2 rv">Articles &amp;<br>resource</h2>
    <div class="arts" style="margin-top:60px">
      @for (a of arts; track a.slug) {
        <a class="ac rv" [routerLink]="['/articles', a.slug]"><div class="ph" [style.--img]="'url(assets/img/' + a.img + '.jpg)'"></div><h4>{{ a.title }}</h4><p>{{ a.desc }}</p><span class="dt">{{ a.date }}</span></a>
      }
    </div>
    <a class="btn soft rv" style="margin-top:50px" routerLink="/articles">All Blogs <span class="ar">→</span></a>
  </div></section>

  <app-faq /><app-cta [warm]="true" />`
})
export class HomeV2Component { arts = ARTICLES.slice(0, 3); }
