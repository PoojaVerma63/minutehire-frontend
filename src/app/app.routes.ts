import { Routes } from '@angular/router';
import { roleGuard } from './core/auth.guard';
import { ShellComponent } from './layout/shell.component';
export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/login.component').then(m => m.LoginComponent) },
  { path: 'chat', canActivate: [roleGuard(['Student', 'Teacher'])], loadComponent: () => import('./pages/chat.component').then(m => m.ChatComponent) },
  { path: 'admin', canActivate: [roleGuard(['Admin'])], loadComponent: () => import('./pages/admin.component').then(m => m.AdminComponent) },
  { path: '404', loadComponent: () => import('./pages/not-found.component').then(m => m.NotFoundComponent) },
  {
    path: '', component: ShellComponent, children: [
      { path: '', pathMatch: 'full', loadComponent: () => import('./pages/landing.component').then(m => m.LandingComponent) },
      { path: 'home-v2', loadComponent: () => import('./pages/home-v2.component').then(m => m.HomeV2Component) },
      { path: 'features', loadComponent: () => import('./pages/features.component').then(m => m.FeaturesComponent) },
      { path: 'company', loadComponent: () => import('./pages/company.component').then(m => m.CompanyComponent) },
      { path: 'articles', loadComponent: () => import('./pages/articles.component').then(m => m.ArticlesComponent) },
      { path: 'articles/:slug', loadComponent: () => import('./pages/article-single.component').then(m => m.ArticleSingleComponent) },
      { path: 'pricing', loadComponent: () => import('./pages/pricing.component').then(m => m.PricingComponent) },
      { path: 'contact', loadComponent: () => import('./pages/contact.component').then(m => m.ContactComponent) },
      {
  path: 'privacy-policy',
  loadComponent: () =>
    import('./pages/privacy-policy.component')
      .then(m => m.PrivacyPolicyComponent)
},
{
  path: 'terms-conditions',
  loadComponent: () =>
    import('./pages/terms-conditions.component')
      .then(m => m.TermsConditionsComponent)
}
    ]
  },
  { path: '**', redirectTo: '404' }
];
