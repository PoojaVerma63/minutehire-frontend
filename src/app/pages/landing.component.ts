import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaComponent, FaqComponent, KfSyncDirective } from '../shared/ui';

@Component({
  selector: 'app-landing', standalone: true, imports: [RouterLink, FaqComponent, CtaComponent, KfSyncDirective],
  templateUrl: './landing.component.html', encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements AfterViewInit, OnDestroy {
  private off: (() => void)[] = [];
  constructor(private host: ElementRef<HTMLElement>, private zone: NgZone) {}
  ngAfterViewInit() { this.zone.runOutsideAngular(() => this.init()); }
  ngOnDestroy() { this.off.forEach(f => f()); }
  private init() {
    const root = this.host.nativeElement;
    const $ = (s: string) => root.querySelector<HTMLElement>(s)!;
    const clamp = (n: number) => Math.min(1, Math.max(0, n));
    const dash = $('#dash'), dimg = dash.querySelector('img')!;
    const quote = $('#quote'), words = quote.textContent!.trim().split(/\s+/);
    quote.innerHTML = words.map(w => `<span>${w}</span>`).join(' ');
    const spans = Array.from(quote.querySelectorAll('span'));
    const onScroll = () => {
      const vh = innerHeight, dr = dash.getBoundingClientRect(), p = clamp((vh - dr.top) / (vh * 0.85));
      dimg.style.setProperty('--rx', (1 - p) * 26 + 'deg'); dimg.style.setProperty('--sc', String(0.9 + 0.1 * p)); dimg.style.setProperty('--op', String(0.7 + 0.3 * p));
      const n = Math.round(clamp((vh * 0.85 - quote.getBoundingClientRect().top) / (vh * 0.45)) * spans.length);
      spans.forEach((s, i) => s.classList.toggle('lit', i < n));
    };
    addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); onScroll();
    this.off.push(() => { removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); });
    if (matchMedia('(hover:hover)').matches) {
      const mv = (e: MouseEvent) => { const r = dash.getBoundingClientRect(); dash.style.transform = `translateY(${((e.clientY - r.top) / r.height - 0.5) * -4}px)`; };
      dash.addEventListener('mousemove', mv); dash.addEventListener('mouseleave', () => (dash.style.transform = ''));
    }
  }
}
