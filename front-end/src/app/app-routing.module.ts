import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path : '' , redirectTo : 'login' , pathMatch : 'full' },
  {path : 'login' , component : LoginComponent , },
  {path : 'home' , loadChildren : ()=>import ('./pages/pages.module').then(route => route.PagesModule)},
  {path : '**' , redirectTo : 'login' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
