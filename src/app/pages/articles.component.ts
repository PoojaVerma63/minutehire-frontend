import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ARTICLES, CtaComponent, PageHeroComponent } from '../shared/ui';

@Component({
  selector: 'app-articles', standalone: true, imports: [RouterLink, PageHeroComponent, CtaComponent], encapsulation: ViewEncapsulation.None,
  template: `
  <app-page-hero [lines]="['General Article &', 'Resources']" [buttons]="true" />
  <section class="hl-wrap" style="padding-bottom:90px;margin-top:-60px">
    <div class="chips2">@for (c of cats; track c) { <button [class.on]="cat === c" (click)="cat = c">{{ c }}</button> }</div>
    <div class="agrid">
      @for (a of list(); track a.slug) {
        <a class="ac" [routerLink]="['/articles', a.slug]"><div class="ph" [style.--img]="'url(assets/img/' + a.img + '.jpg)'"></div><h4>{{ a.title }}</h4><p>{{ a.desc }}</p><span class="dt">{{ a.date }}</span></a>
      }
    </div>
  </section>
  <app-cta />`
})
export class ArticlesComponent {
  cats = ['All', 'HR Management', 'Small Team', 'Team Management', 'Startup']; cat = 'All';
  list() { return this.cat === 'All' ? ARTICLES : ARTICLES.filter(a => a.cat === this.cat); }
}
