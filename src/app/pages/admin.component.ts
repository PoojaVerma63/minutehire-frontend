import { Component, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { ApiService, LogItem, Stats } from '../core/api.service';
@Component({
  selector: 'app-admin', standalone: true, imports: [FormsModule, RouterLink, DatePipe],
  template: `
  <div class="app-wrap wide">
    <div class="panel top"><div><b>{{ auth.user()?.name }}</b> <small>(Admin)</small></div>
      <div><a routerLink="/" class="btn ghost sm">Home</a> <button class="btn sm" (click)="auth.logout()">Logout</button></div></div>
    <div class="panel"><h3>Admin Dashboard</h3>
      @if (stats(); as s) { <div class="kpis"><div><small>Users</small><b>{{ s.users }}</b></div><div><small>Interactions</small><b>{{ s.interactions }}</b></div><div><small>Errors</small><b>{{ s.errors }}</b></div>
        @for (r of s.byRole; track r.role) { <div><small>{{ r.role }}</small><b>{{ r.count }}</b></div> } </div> }
      <div class="bar"><label>Role <select [(ngModel)]="role" (ngModelChange)="page = 1; load()"><option value="">All</option><option>Student</option><option>Teacher</option></select></label>
        <button class="btn ghost sm" (click)="load()">Refresh</button></div>
      @if (error()) { <p class="err">{{ error() }}</p> }
      <div class="tbl"><table><thead><tr><th>Time</th><th>User</th><th>Role</th><th>Prompt</th><th>Response</th><th>Status</th><th>ms</th><th>IP</th></tr></thead>
        <tbody>@for (l of logs(); track l.id) { <tr><td>{{ l.timestamp | date:'medium' }}</td><td>{{ l.user }}</td><td>{{ l.role }}</td><td>{{ l.prompt }}</td><td>{{ l.response }}</td>
          <td [class.err]="l.status === 'Error'">{{ l.status }}</td><td>{{ l.durationMs }}</td><td>{{ l.ipAddress }}</td></tr> } @empty { <tr><td colspan="8" class="muted">No interactions yet.</td></tr> }</tbody></table></div>
      <div class="bar"><button class="btn ghost sm" [disabled]="page <= 1" (click)="go(-1)">← Prev</button><span>Page {{ page }} · {{ total() }} logs</span>
        <button class="btn ghost sm" [disabled]="page * size >= total()" (click)="go(1)">Next →</button></div>
    </div>
  </div>`
})
export class AdminComponent implements OnInit {
  logs = signal<LogItem[]>([]); stats = signal<Stats | null>(null); total = signal(0); error = signal('');
  role = ''; page = 1; size = 10;
  constructor(public auth: AuthService, private api: ApiService) {}
  ngOnInit() { this.load(); }
  go(d: number) { this.page += d; this.load(); }
  load() {
    this.api.stats().subscribe({ next: s => this.stats.set(s), error: () => {} });
    this.api.logs(this.role, this.page, this.size).subscribe({
      next: r => { this.logs.set(r.items); this.total.set(r.total); this.error.set(''); },
      error: e => this.error.set(e.error?.error || 'Failed to load logs')
    });
  }
}
