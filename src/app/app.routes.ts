import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'emp', loadComponent:()=>import(`./emp/emp`).then((m)=>m.Emp) },
];
