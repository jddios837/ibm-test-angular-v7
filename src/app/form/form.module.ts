import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule, MatFormFieldModule } from '@angular/material';


import { routing } from "./form.routing";

import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,

    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 

    MatCardModule,

    routing
  ]
})
export class FormModule { }
