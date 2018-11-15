import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
        { path : '' , component : AdminhomepageComponent },
    ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
