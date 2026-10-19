import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
export interface LogItem { id: number; user: string; email: string; role: string; prompt: string; response: string; status: string; durationMs: number; ipAddress: string | null; timestamp: string; }
export interface LogPage { total: number; page: number; items: LogItem[]; }
export interface Stats { users: number; interactions: number; errors: number; byRole: { role: string; count: number }[]; }
@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = environment.apiUrl;
  constructor(private http: HttpClient) {}
  chat(message: string) { return this.http.post<{ reply: string }>(`${this.base}/api/ai/chat`, { message }); }
  logs(role: string, page: number, pageSize = 10) {
    let p = new HttpParams().set('page', page).set('pageSize', pageSize);
    if (role) p = p.set('role', role);
    return this.http.get<LogPage>(`${this.base}/api/admin/logs`, { params: p });
  }
  stats() { return this.http.get<Stats>(`${this.base}/api/admin/stats`); }
}
