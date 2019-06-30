import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  { path: 'form', loadChildren: './form/form.module#FormModule' },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
