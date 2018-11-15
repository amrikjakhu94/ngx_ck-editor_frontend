import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    // BrowserAnimationsModule,
    ButtonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    AccordionModule,
    // BrowserAnimationsModule,
    ButtonModule,
    FormsModule
  ]
})
export class SharedModule { }
