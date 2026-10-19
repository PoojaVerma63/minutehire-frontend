import { AfterViewInit, Component, ElementRef, HostListener, NgZone, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-shell', standalone: true, imports: [RouterOutlet, RouterLink, RouterLinkActive], encapsulation: ViewEncapsulation.None,
  template: `
  <div class="hl">
    <header class="hl-nav" [class.s]="scrolled"><div class="hl-nav-in">
      <a class="logo" routerLink="/"><i></i>Hirely</a>
      <nav class="hl-menu" [class.open]="menuOpen">
        <div class="dd" [class.open]="dd === 'home'">
          <button class="ddb" (click)="toggle('home', $event)">Home <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
          <div class="ddm small"><a routerLink="/">Home V1</a><a routerLink="/home-v2">Home V2</a></div>
        </div>
        <div class="dd" [class.open]="dd === 'pages'">
          <button class="ddb" (click)="toggle('pages', $event)">Pages <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
          <div class="ddm mega">
            <div class="mc"><h5>Pages</h5><a routerLink="/" routerLinkActive="on" [routerLinkActiveOptions]="{exact:true}">Home V1</a><a routerLink="/home-v2" routerLinkActive="on">Home V2</a><a routerLink="/features" routerLinkActive="on">Feature</a><a routerLink="/company" routerLinkActive="on">Company</a><a routerLink="/articles" routerLinkActive="on">Article</a></div>
            <div class="mc"><h5>Inner Pages</h5><a routerLink="/pricing" routerLinkActive="on">Pricing</a><a routerLink="/articles/hiring-made-simple" routerLinkActive="on">Article Single</a><a routerLink="/contact" routerLinkActive="on">Contact</a></div>
            <div class="mc util"><h5>Utility Pages</h5><a class="tile" routerLink="/404">404</a><a class="tile" routerLink="/login">Login</a></div>
          </div>
        </div>
        <a routerLink="/features" routerLinkActive="on">Features</a><a routerLink="/company" routerLinkActive="on">Company</a><a routerLink="/articles">Resources</a>
      </nav>
      <div class="hl-actions"><a class="btn soft" routerLink="/pricing">Pricing</a><a class="btn" routerLink="/contact">Contact</a></div>
      <button id="burger" [class.x]="menuOpen" (click)="menuOpen = !menuOpen" aria-label="Menu"><span></span><span></span></button>
    </div></header>

    <main><router-outlet /></main>

    <footer class="hl-foot"><div class="hl-wrap">
      <div class="fgrid">
        <div class="em"><a class="logo" routerLink="/"><i></i>Hirely</a><p>Email</p><a href="mailto:support@hirely.com">support&#64;hirely.com</a></div>
        <div class="fcol"><p class="fh">Pages</p><a routerLink="/features">Features</a><a routerLink="/company">Company</a><a routerLink="/articles">Article</a><a routerLink="/articles/hiring-made-simple">Article Single</a><a routerLink="/pricing">Pricing</a></div>
        <div class="fcol"><p class="fh">Utility</p>
        <a routerLink="/404">404</a><a routerLink="/login">Login</a>
        <p class="fh" style="margin-top:22px">Policy</p>
       <a routerLink="/privacy-policy">Privacy Policy</a>
<a routerLink="/terms-conditions">Terms &amp; Conditions</a>
        
        </div>
        <div><p class="nlh">Newsletter</p>
          <form id="nl" (submit)="subscribe($event, em)"><input #em type="email" placeholder="Email" required><button class="btn sm">Subscribe</button></form>
          <small>{{ nlMsg }}</small></div>
      </div>
      <div class="copy">© Copyright 2026 | Design &amp; Developed By Pooja Verma</div>
    </div></footer>
  </div>`
})
export class ShellComponent implements AfterViewInit, OnDestroy {
  scrolled = false; menuOpen = false; dd: string | null = null; nlMsg = '';
  private io?: IntersectionObserver; private mo?: MutationObserver; private sub: any;
  constructor(private router: Router, private host: ElementRef<HTMLElement>, private zone: NgZone) {
    this.sub = this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => { this.menuOpen = false; this.dd = null; window.scrollTo(0, 0); });
  }
  @HostListener('window:scroll') onScroll() { const s = scrollY > 20; if (s !== this.scrolled) this.scrolled = s; }
  @HostListener('document:click') closeDd() { this.dd = null; }
  toggle(n: string, e: Event) { e.stopPropagation(); this.dd = this.dd === n ? null : n; }
  subscribe(e: Event, em: HTMLInputElement) { e.preventDefault(); this.nlMsg = 'Thanks for subscribing!'; em.value = ''; }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); this.io!.unobserve(e.target); } }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      const scan = () => this.host.nativeElement.querySelectorAll<HTMLElement>('.rv:not([data-o])').forEach(el => {
        el.dataset['o'] = '1';
        const idx = Array.from(el.parentElement!.children).filter(c => c.classList.contains('rv')).indexOf(el);
        el.style.setProperty('--dl', Math.max(0, idx) * 0.08 + 's'); this.io!.observe(el);
      });
      scan(); let t: any;
      this.mo = new MutationObserver(() => { clearTimeout(t); t = setTimeout(scan, 40); });
      this.mo.observe(this.host.nativeElement.querySelector('main')!, { childList: true, subtree: true });
    });
  }
  ngOnDestroy() { this.io?.disconnect(); this.mo?.disconnect(); this.sub?.unsubscribe(); }
}
