// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZumosContentComponent } from './zumos-content/zumos-content.component';
import { ChocolateContentComponent } from './chocolate-content/chocolate-content.component';
import { FrutaContentComponent } from './fruta-content/fruta-content.component';
import {CistellaComponent} from './cistella/cistella.component';
import {LoginComponent} from './login/login.component';
import {UsuariRegistratComponent} from './usuari-registrat/usuari-registrat.component';



const routes: Routes = [
  { path: 'zumos', component: ZumosContentComponent },
  { path: 'chocolate', component: ChocolateContentComponent },
  { path: 'frutas', component: FrutaContentComponent },
  { path: 'cistella', component: CistellaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'loginUser', component: UsuariRegistratComponent},

  { path: '', redirectTo: '/zumos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
