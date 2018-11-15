import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminhomepageComponent
  ],
  imports: [
    AdminRoutingModule,
    SharedModule,
    CKEditorModule
  ]
})
export class AdminModule { }
