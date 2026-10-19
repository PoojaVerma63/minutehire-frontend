import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login', standalone: true, imports: [FormsModule, RouterLink],
  template: `
  <div class="auth">
    <aside class="auth-side">
      <div class="auth-bg"></div>
      <a routerLink="/" class="logo light"><i></i>Hirely</a>
      <div class="auth-copy">
        <span class="tag">Simple and integrated HR tools</span>
        <h1 class="auth-h">Welcome back to<br><em>Hirely</em></h1>
        <p>Simple payroll, integrated HR tools, and expert support, all in one place.</p>
        <ul>
          <li>🎙️ Talk to your AI assistant with voice</li>
          <li>🔐 Role-based access for every team member</li>
          <li>📊 Full activity logs for admins</li>
        </ul>
      </div>
      <small class="auth-foot">© 2026 Hirely. All rights reserved.</small>
    </aside>

    <main class="auth-main">
      <form class="auth-card" (ngSubmit)="submit()" #f="ngForm">
        <a routerLink="/" class="back">← Back to home</a>
        <h2>Log in</h2>
        <p class="sub">Enter your details to access your workspace.</p>

        <div class="chips">
          <span>Quick fill:</span>
          <button type="button" (click)="fill('admin')">Admin</button>
          <button type="button" (click)="fill('teacher')">Teacher</button>
          <button type="button" (click)="fill('student')">Student</button>
        </div>

        <label class="fld">Email
          <input name="email" type="email" [(ngModel)]="email" required placeholder="you&#64;company.com" autocomplete="username">
        </label>
        <label class="fld">Password
          <div class="pw">
            <input name="pw" [type]="show() ? 'text' : 'password'" [(ngModel)]="password" required placeholder="Enter your password" autocomplete="current-password">
            <button type="button" class="eye" (click)="show.set(!show())" [attr.aria-label]="show() ? 'Hide password' : 'Show password'">{{ show() ? '🙈' : '👁️' }}</button>
          </div>
        </label>

        @if (error()) { <div class="alert" role="alert">{{ error() }}</div> }

        <button class="btn full" [disabled]="busy() || f.invalid">
          {{ busy() ? 'Signing in…' : 'Log in' }} @if (!busy()) { <span class="ar">→</span> }
        </button>
      </form>
    </main>
  </div>`
})
export class LoginComponent {
  email = ''; password = '';
  show = signal(false); error = signal(''); busy = signal(false);
  private demo: Record<string, [string, string]> = {
    admin: ['admin@minutehire.com', 'Admin@123'],
    teacher: ['teacher@minutehire.com', 'Teacher@123'],
    student: ['student@minutehire.com', 'Student@123']
  };
  constructor(private auth: AuthService, private router: Router) {}
  fill(role: string) { [this.email, this.password] = this.demo[role]; this.error.set(''); }
  submit() {
    this.busy.set(true); this.error.set('');
    this.auth.login(this.email.trim(), this.password).subscribe({
      next: u => this.router.navigate([u.role === 'Admin' ? '/admin' : '/chat']),
      error: e => {
        this.error.set(e.status === 0 ? 'Cannot reach the server. Is the backend running?' : (e.error?.error || 'Login failed. Please try again.'));
        this.busy.set(false);
      }
    });
  }
}
