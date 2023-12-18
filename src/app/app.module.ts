import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutesModule } from './routes.module'


// Importaciones de los Componentes en el Módulo principal //
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsModule } from './components/pages/products/products.module';
import { WelcomeModule } from './components/pages/welcome/welcome.module';
import { ContactModule } from './components/pages/contact/contact.module';
import { AboutModule } from './components/pages/about/about.module';
import { FooterModule } from './components/footer/footer.module';




@NgModule({

  declarations: [ // Declaracines de Componentes //
    AppComponent,
    HeaderComponent,
  ],

  imports: [ // Impotaciones de  Modulos //
    BrowserModule,
    RoutesModule,
    ProductsModule,
    WelcomeModule,
    ContactModule,
    AboutModule,
    FooterModule
  ],

  providers: [  ], // Declaración de Servicios //

  bootstrap: [AppComponent]

})

export class AppModule { }










