import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth' , loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)},
  {path:'' , loadChildren:()=>import('./modules/home/home.module').then(m=>m.HomeModule)},
  {path:'**' , loadChildren:()=>import('./modules/errors/errors.module').then(m=>m.ErrorsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
