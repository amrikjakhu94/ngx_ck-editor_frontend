import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';

@NgModule({
  declarations: [
    UserComponent,
    UserhomepageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
