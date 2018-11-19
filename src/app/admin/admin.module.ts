import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CKEditorModule } from 'ngx-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AddnewcmsComponent } from './addnewcms/addnewcms.component';
import { ViewcmsComponent } from './viewcms/viewcms.component';
import { EditcmsComponent } from './editcms/editcms.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminhomepageComponent,
    AddnewcmsComponent,
    ViewcmsComponent,
    EditcmsComponent
  ],
  imports: [
    AdminRoutingModule,
    SharedModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule
  ]
})
export class AdminModule { }
