import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AddnewcmsComponent } from './addnewcms/addnewcms.component';
import { ViewcmsComponent } from './viewcms/viewcms.component';
import { EditcmsComponent } from './editcms/editcms.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
        { path : '' , component : AdminhomepageComponent },
        { path : 'createNewCmsPage' , component : AddnewcmsComponent },
        { path : 'viewcms' , component : ViewcmsComponent },
        { path : 'editcms' , component : EditcmsComponent }

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
