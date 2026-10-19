import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaComponent, FaqComponent, PageHeroComponent } from '../shared/ui';

@Component({
  selector: 'app-pricing', standalone: true, imports: [RouterLink, PageHeroComponent, FaqComponent, CtaComponent], encapsulation: ViewEncapsulation.None,
  template: `
  <app-page-hero [lines]="['Plans and', 'Flexible Pricing']" />
  <section class="hl-wrap center" style="margin-top:-70px">
    <div class="tgl"><button [class.on]="!monthly" (click)="monthly = false">Yearly</button><button [class.on]="monthly" (click)="monthly = true">Monthly</button></div>
    <div class="plans">
      @for (p of plans; track p.name) {
        <div class="plan rv">
          <h3>{{ p.name }} @if (p.pop) { <span class="mp">Most Popular</span> }</h3>
          <div class="price">\${{ monthly ? p.m : p.y }}<small>/month</small></div>
          <p class="d">Perfect for your needs or small teams, startups and growing business</p>
          <a class="btn lime full" routerLink="/contact">Get started</a>
          <div class="fbox"><h5>Features:</h5><ul>@for (f of p.f; track f) { <li>{{ f }}</li> }</ul></div>
        </div>
      }
    </div>
  </section>
  <app-faq /><app-cta />`
})
export class PricingComponent {
  monthly = true;
  plans = [
    { name: 'Starter Plan', m: 499, y: 399, pop: false, f: ['Employee Directory', 'Basic Leave Management', '05 Admin User', 'Basic Reports & Analytics', 'Access to Web Dashboard', 'Teams up to 10'] },
    { name: 'Premium Plan', m: 699, y: 559, pop: true, f: ['Advanced Reporting & Insights', 'Custom Workflows', 'Role-Based Access Controls', 'Payroll Integration (Basic)', 'Performance Management', 'Slack / Teams Integration'] }
  ];
}
