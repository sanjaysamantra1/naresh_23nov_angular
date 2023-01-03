import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CenterComponent } from './components/center/center.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { LoginComponent } from './components/login/login.component';
import { DatabindingComponent } from './components/databinding/databinding.component';

@NgModule({
  // Components, Pipes , Directives
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    NavbarComponent,
    CarouselComponent,
    ElectronicsComponent,
    LoginComponent,
    DatabindingComponent,
  ],
  // Dependent Modules
  imports: [BrowserModule],
  // Services / Injectables
  providers: [],
  // Main Component to Bootstrap/Load
  bootstrap: [AppComponent],
})
export class AppModule {}
