import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NacionalComponent } from './pages/nacional/nacional.component';
import { InternacionalComponent } from './pages/internacional/internacional.component';
import { NotaComponent } from './pages/nota/nota.component';

@NgModule({
  declarations: [
    AppComponent,
    NacionalComponent,
    InternacionalComponent,
    NotaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
