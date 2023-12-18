import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PagerComponent } from './pager/pager.component';
import { LoaderComponent } from './loader/loader.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { CustomaboutComponent } from './customabout/customabout.component';



@NgModule({
  declarations: [
    PagerComponent,
    LoaderComponent,
    CustomCardComponent,
    CustomaboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagerComponent,
    LoaderComponent,
    CustomCardComponent,
    CustomaboutComponent
  ]
})
export class SharedModule { }
