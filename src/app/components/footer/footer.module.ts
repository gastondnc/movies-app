import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SitemapComponent } from './components/sitemap/sitemap.component';
import { FooterComponent } from './footer.component';



@NgModule({
  declarations: [
    FooterComponent,
    SitemapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
