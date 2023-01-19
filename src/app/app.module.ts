import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CenterComponent } from './components/center/center.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { LoginComponent } from './components/login/login.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './components/directives/directives.component';
import { UsersComponent } from './components/users/users.component';
import { GreetComponent } from './components/greet/greet.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NumberonlyDirective } from './custom-directives/numberonly.directive';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { RemainingPipe } from './custom-pipes/remaining.pipe';
import { OrdinalPipe } from './custom-pipes/ordinal.pipe';
import { NameprefixPipe } from './custom-pipes/nameprefix.pipe';
import { MyfilterPipe } from './custom-pipes/myfilter.pipe';
import { TruncatePipe } from './custom-pipes/truncate.pipe';
import { MysortPipe } from './custom-pipes/mysort.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';

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
    DirectivesComponent,
    UsersComponent,
    GreetComponent,
    ModalComponent,
    ProductListComponent,
    NumberonlyDirective,
    HighlightDirective,
    PipesComponent,
    RemainingPipe,
    OrdinalPipe,
    NameprefixPipe,
    MyfilterPipe,
    TruncatePipe,
    MysortPipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    CategoriesComponent,
    CategoryComponent,
  ],
  // Dependent Modules
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  // Services / Injectables
  providers: [],
  // Main Component to Bootstrap/Load
  bootstrap: [AppComponent],
})
export class AppModule {}
