import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from "./form.routing";

import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class FormModule { }
