import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path : '' , loadChildren : './user/user.module#UserModule' },
  { path : 'admin' , loadChildren : './admin/admin.module#AdminModule' },
  { path : '**' , loadChildren : './user/user.module#UserModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
