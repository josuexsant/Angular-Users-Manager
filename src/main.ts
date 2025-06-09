import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'pages/home', pathMatch: 'full' as const },
  {
    path: 'pages',
    loadChildren: () => import('./app/pages/pages.routes').then(m => m.PAGES_ROUTES)
  },
  { path: '**', redirectTo: 'pages/home', pathMatch: 'full' as const }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
