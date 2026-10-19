import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
export const roleGuard = (roles: string[]): CanActivateFn => () => {
  const u = inject(AuthService).user(), r = inject(Router);
  if (!u) return r.parseUrl('/login');
  if (!roles.includes(u.role)) return r.parseUrl(u.role === 'Admin' ? '/admin' : '/chat');
  return true;
};
