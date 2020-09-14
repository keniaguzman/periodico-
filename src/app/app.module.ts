import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NacionalComponent } from './pages/nacional/nacional.component';
import { InternacinalComponent } from './pages/internacinal/internacinal.component';

@NgModule({
  declarations: [
    AppComponent,
    NacionalComponent,
    InternacinalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
