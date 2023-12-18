// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZumosContentComponent } from './zumos-content/zumos-content.component';
import { ChocolateContentComponent } from './chocolate-content/chocolate-content.component';
import { FrutaContentComponent } from './fruta-content/fruta-content.component';

const routes: Routes = [
  { path: 'zumos', component: ZumosContentComponent },
  { path: 'chocolate', component: ChocolateContentComponent },
  { path: 'frutas', component: FrutaContentComponent },
  { path: '', redirectTo: '/zumos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
