import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ZumosContentComponent } from './zumos-content/zumos-content.component';
import { ChocolateContentComponent } from './chocolate-content/chocolate-content.component';
import { FrutaContentComponent } from './fruta-content/fruta-content.component';
import { AppRoutingModule } from './app-routing.module';
import { CistellaComponent } from './cistella/cistella.component';
import { LoginComponent } from './login/login.component';
import { UsuariRegistratComponent } from './usuari-registrat/usuari-registrat.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ZumosContentComponent,
    ChocolateContentComponent,
    FrutaContentComponent,
    CistellaComponent,
    LoginComponent,
    UsuariRegistratComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
