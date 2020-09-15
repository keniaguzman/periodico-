import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NacionalComponent } from '../pages/nacional/nacional.component';
import { InternacionalComponent } from '../pages/internacional/internacional.component';


const routes: Routes = [
  {
    path: 'nacional',
    component: NacionalComponent,
  },
  {
    path: 'internacional',
    component: InternacionalComponent,
  },
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
