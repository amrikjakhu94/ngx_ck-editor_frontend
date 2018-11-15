import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
        { path : '' , component : UserhomepageComponent },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
