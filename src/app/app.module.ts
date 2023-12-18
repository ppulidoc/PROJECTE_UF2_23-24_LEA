import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ZumosContentComponent } from './zumos-content/zumos-content.component';
import { ChocolateContentComponent } from './chocolate-content/chocolate-content.component';
import { FrutaContentComponent } from './fruta-content/fruta-content.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ZumosContentComponent,
    ChocolateContentComponent,
    FrutaContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
