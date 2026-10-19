import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';
export interface AuthUser { token: string; name: string; role: string; }
@Injectable({ providedIn: 'root' })
export class AuthService {
  user = signal<AuthUser | null>(JSON.parse(localStorage.getItem('mh_user') || 'null'));
  constructor(private http: HttpClient, private router: Router) {}
  login(email: string, password: string) {
    return this.http.post<AuthUser>(`${environment.apiUrl}/api/auth/login`, { email, password })
      .pipe(tap(u => { localStorage.setItem('mh_user', JSON.stringify(u)); this.user.set(u); }));
  }
  logout() { localStorage.removeItem('mh_user'); this.user.set(null); this.router.navigate(['/login']); }
}
