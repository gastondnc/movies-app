import { NgModule } from "@angular/core";


// Impotaciones de desarrollo //
import { ProductsComponent } from "./products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { GalleryDetailsComponent } from "./components/gallery-details/gallery-details.component";
import { MoviesService } from "src/app/services/movies.service";
import { BrowserModule } from "@angular/platform-browser";
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SharedModule } from "../../shared/shared.module";
import { ItalicPipe } from "src/app/pipes/italic.pipe";




@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    GalleryDetailsComponent,
    MovieCardComponent,
    ItalicPipe
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [  MoviesService ]
})


export class ProductsModule { }
