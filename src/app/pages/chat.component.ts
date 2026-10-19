import { Component, NgZone, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { ApiService } from '../core/api.service';
interface Msg { who: 'u' | 'a'; text: string; }
@Component({
  selector: 'app-chat', standalone: true, imports: [FormsModule, RouterLink],
  template: `
  <div class="app-wrap">
    <div class="panel top"><div><b>{{ auth.user()?.name }}</b> <small>({{ auth.user()?.role }})</small></div>
      <div><a routerLink="/" class="btn ghost sm">Home</a> <button class="btn sm" (click)="auth.logout()">Logout</button></div></div>
    <div class="panel"><h3>AI Voice Conversation ({{ auth.user()?.role }})</h3>
      <div class="chatlog">
        @for (m of msgs(); track $index) { <div class="msg" [class.u]="m.who === 'u'">{{ m.text }}</div> }
        @empty { <p class="muted">Press the mic and start speaking…</p> }
      </div>
      <button class="mic" [class.on]="listening()" [disabled]="busy()" (click)="toggleMic()">{{ listening() ? '⏹ Listening… tap to stop' : (busy() ? 'Thinking…' : '🎤 Start Conversation') }}</button>
      <form class="typed" (ngSubmit)="send(typed); typed = ''"><input name="typed" [(ngModel)]="typed" placeholder="…or type here"><button class="btn sm">Send</button></form>
      <p class="muted small">Voice input uses browser speech recognition (Chrome / Edge). Replies are spoken with browser text-to-speech.</p>
    </div>
  </div>`
})
export class ChatComponent {
  msgs = signal<Msg[]>([]); listening = signal(false); busy = signal(false); typed = '';
  private rec: any;
  constructor(public auth: AuthService, private api: ApiService, private zone: NgZone) {}
  private add(who: 'u' | 'a', text: string) { this.msgs.update(m => [...m, { who, text }]); }
  toggleMic() {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { alert('Speech recognition is not supported in this browser. Use Chrome/Edge or type your message.'); return; }
    if (this.listening()) { this.rec.stop(); return; }
    this.rec = new SR(); this.rec.lang = 'en-IN';
    this.rec.onstart = () => this.zone.run(() => this.listening.set(true));
    this.rec.onend = () => this.zone.run(() => this.listening.set(false));
    this.rec.onerror = (e: any) => this.zone.run(() => this.add('a', 'Mic error: ' + e.error));
    this.rec.onresult = (e: any) => this.zone.run(() => this.send(e.results[0][0].transcript));
    this.rec.start();
  }
  send(text: string) {
    text = (text || '').trim(); if (!text) return;
    this.add('u', text); this.busy.set(true);
    this.api.chat(text).subscribe({
      next: r => { this.add('a', r.reply); this.busy.set(false); speechSynthesis.cancel(); speechSynthesis.speak(new SpeechSynthesisUtterance(r.reply)); },
      error: e => { this.add('a', '⚠ ' + (e.error?.error || 'Something went wrong')); this.busy.set(false); }
    });
  }
}
