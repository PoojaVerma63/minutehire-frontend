import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-not-found', standalone: true, imports: [RouterLink], encapsulation: ViewEncapsulation.None,
  template: `<div class="hl nf"><div><div class="n4 fade"><span>4</span><span class="z">0</span><span>4</span></div>
    <h1 class="fade d3">We've lost this page!</h1><p class="fade d3">looks like the owner have removed the screen or it doesn't exist</p>
    <a class="btn fade d4" routerLink="/">Back to home</a></div></div>`
})
export class NotFoundComponent {}
