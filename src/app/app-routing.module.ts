import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full'},
  { path: 'form', loadChildren: './form/form.module#FormModule' },
  
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
