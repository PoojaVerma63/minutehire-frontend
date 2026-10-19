import { AfterViewInit, Component, Directive, ElementRef, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Art { slug: string; img: string; title: string; desc: string; date: string; cat: string; }
export const ARTICLES: Art[] = [
  { slug: 'hiring-made-simple', img: 'article-1', cat: 'HR Management', date: 'Jun 5, 2025', title: 'Hiring Made Simple with Our New AI-Powered Candidate', desc: 'Discover how intelligent algorithms are transforming recruitment by helping you find the best-fit.' },
  { slug: 'a-better-way-to-build-culture', img: 'article-2', cat: 'Team Management', date: 'Jun 8, 2025', title: 'A Better Way to Build Culture Customizable HR Workflows', desc: 'Streamline Your HR, Simplify Your Day Manage payroll, hiring, and performance—all in one powerful tool.' },
  { slug: 'trust-in-the-workplace', img: 'article-3', cat: 'Startup', date: 'Jun 10, 2025', title: 'Trust in the Workplace with Our Updated Analytics', desc: 'Smart HR Tools for Smarter Teams Automate admin tasks and focus on what really matters: your people.' },
  { slug: 'why-every-business-needs-hr', img: 'article-4', cat: 'HR Management', date: 'Jun 12, 2025', title: 'Why Every Modern Business Needs an HR Management', desc: "From Hire to Retire—We've Got You Covered End-to-end HR management made easy, efficient, and effortless." },
  { slug: 'simplify-your-workflow', img: 'article-5', cat: 'Small Team', date: 'Jun 14, 2025', title: 'Simplify Your Workflow: Automating HR Processes', desc: 'Empower Your HR, Elevate Your Workforce Boost productivity with tools designed for modern HR leaders.' },
  { slug: 'a-day-in-the-life', img: 'article-6', cat: 'Team Management', date: 'Jun 16, 2025', title: 'A Day in the Life with an HR Management Tool in Industry', desc: 'Your HR Hub, Reimagined One platform. Every HR need. Zero stress.' }
];

@Component({
  selector: 'app-page-hero', standalone: true, imports: [RouterLink], encapsulation: ViewEncapsulation.None,
  template: `
  <section class="hl-hero page"><div class="hl-hero-bg"></div>
    <div class="hl-wrap center">
      <span class="pill fade">Simple and integrated HR tools</span>
      <h1 class="hl-h1">@for (l of lines; track l) { <span class="ln"><span>{{ l }}</span></span> }</h1>
      <p class="hl-lead fade d3">{{ sub }}</p>
      @if (buttons) { <div class="row fade d4"><a class="btn lime" routerLink="/login">Try Hirely for free</a><a class="btn white" routerLink="/contact">Book a demo</a></div> }
    </div>
  </section>`
})
export class PageHeroComponent {
  @Input() lines: string[] = [];
  @Input() sub = 'Simple payroll, integrated HR tools, and expert support, all in one place.';
  @Input() buttons = false;
}

@Component({
  selector: 'app-cta', standalone: true, imports: [RouterLink], encapsulation: ViewEncapsulation.None,
  template: `
  <section class="hl-ctaw"><div class="hl-wrap center">
    <span class="hl-label rv">Sign up</span>
    <div class="hl-cta rv" [class.warm]="warm"><h2 class="hl-h2">Start building a better workflow</h2>
      <p>Simple payroll, integrated HR tools, and expert support, all in one place.</p>
      <a class="btn white" routerLink="/login">Try Hirely for free</a></div>
  </div></section>`
})
export class CtaComponent { @Input() warm = false; }

@Component({
  selector: 'app-faq', standalone: true, imports: [RouterLink], encapsulation: ViewEncapsulation.None,
  template: `
  <section id="faq" class="hl-sec"><div class="hl-wrap hl-faq">
    <div class="fl"><h2 class="hl-h2 left rv">Frequently asked questions</h2><a class="btn soft rv" routerLink="/contact">Try Hirely <span class="ar">→</span></a></div>
    <div class="fr">
      @for (f of faqs; track f.q; let i = $index) {
        <div class="q rv" [class.open]="open === i">
          <button (click)="open = open === i ? -1 : i"><span>{{ f.q }}</span><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 7l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg></button>
          <div class="a"><p>{{ f.a }}</p></div>
        </div>
      }
    </div>
  </div></section>`
})
export class FaqComponent {
  open = 0;
  faqs = [
    { q: 'What features are included in the HR management app?', a: 'Our app offers employee onboarding, leave management, attendance tracking, payroll integration, performance reviews, and document storage—everything you need to streamline your HR processes.' },
    { q: 'How do I get started on Hirely?', a: 'Sign up for a free trial, import your team, and connect your payroll tools. Setup takes only a few minutes.' },
    { q: 'Is the app suitable for small and medium-sized businesses?', a: 'Yes. Hirely scales from small teams to growing companies with flexible plans.' },
    { q: 'Can I integrate this app with other tools we use?', a: 'Hirely connects with major accounting software, pension schemes and popular workplace tools.' },
    { q: 'How secure is our employee data on this platform?', a: 'Data is encrypted in transit and at rest, with role-based access and audit logs.' }
  ];
}

/** Syncs an accordion (.acc-i) with stacked panels (.kp) while scrolling. */
@Directive({ selector: '[kfSync]', standalone: true })
export class KfSyncDirective implements AfterViewInit, OnDestroy {
  private io?: IntersectionObserver; private off: (() => void)[] = [];
  constructor(private el: ElementRef<HTMLElement>) {}
  ngAfterViewInit() {
    const root = this.el.nativeElement;
    const items = Array.from(root.querySelectorAll<HTMLElement>('.acc-i'));
    const panels = Array.from(root.querySelectorAll<HTMLElement>('.kp'));
    const set = (i: number) => items.forEach((x, k) => x.classList.toggle('on', k === i));
    items.forEach((b, i) => { const f = () => { set(i); panels[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }; b.addEventListener('click', f); this.off.push(() => b.removeEventListener('click', f)); });
    this.io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) set(panels.indexOf(e.target as HTMLElement)); }), { rootMargin: '-45% 0px -45% 0px' });
    panels.forEach(p => this.io!.observe(p));
  }
  ngOnDestroy() { this.io?.disconnect(); this.off.forEach(f => f()); }
}
