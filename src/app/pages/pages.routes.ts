import { Routes } from '@angular/router';

export const PAGES_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' as const },
  { 
    path: 'home', 
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  { 
    path: 'perfil', 
    loadComponent: () => import('./perfil/perfil.component').then(m => m.PerfilComponent)
  },
  { 
    path: 'estructuras', 
    loadComponent: () => import('./estructuras/estructuras.component').then(m => m.EstructurasComponent)
  },
  { 
    path: 'documentacion', 
    loadComponent: () => import('./documentacion/documentacion.component').then(m => m.DocumentacionComponent)
  },
  { 
    path: 'usuarios', 
    loadComponent: () => import('./usuarios/usuarios.component').then(m => m.UsuariosComponent)
  }
];
