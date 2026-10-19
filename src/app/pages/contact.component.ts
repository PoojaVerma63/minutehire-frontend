import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CtaComponent } from '../shared/ui';

@Component({
  selector: 'app-contact', standalone: true, imports: [FormsModule, CtaComponent], encapsulation: ViewEncapsulation.None,
  template: `
  <section class="hl-wrap ct">
    <div><h1><span class="ln"><span>Talk to</span></span><span class="ln"><span>our Experts!</span></span></h1><div class="soc">Socials<div>Behance <span>•</span> Dribbble <span>•</span> Facebook</div></div></div>
    <form class="fcard fade d3" (ngSubmit)="send()" #f="ngForm">
      <div class="top">Reach us Anytime via <a href="mailto:support@hirely.com">support&#64;hirely.com</a></div>
      <div class="f2"><label>First Name<input name="fn" [(ngModel)]="d.fn" placeholder="John" required></label><label>Last Name<input name="ln" [(ngModel)]="d.ln" placeholder="Doe" required></label></div>
      <div class="f2"><label>Email<input name="em" type="email" [(ngModel)]="d.em" placeholder="support&#64;hirely.com" required></label><label>Phone Number<input name="ph" [(ngModel)]="d.ph" placeholder="+44 000 123 567"></label></div>
      <label style="color:var(--mut)">Message<textarea name="ms" [(ngModel)]="d.ms" placeholder="Type your message" required></textarea></label>
      <label class="chk"><input type="checkbox" name="nl" [(ngModel)]="d.nl"> Subscribe to our newsletter to receive insightful content</label>
      <button class="send" [class.ok]="f.valid" [disabled]="f.invalid">Send Message</button>
      @if (sent) { <div class="okmsg">Thanks {{ name }}! Your message has been received. We'll get back to you soon.</div> }
    </form>
  </section>
  <app-cta />`
})
export class ContactComponent {
  d = { fn: '', ln: '', em: '', ph: '', ms: '', nl: false }; sent = false; name = '';
  send() { this.name = this.d.fn; this.sent = true; this.d = { fn: '', ln: '', em: '', ph: '', ms: '', nl: false }; }
}
