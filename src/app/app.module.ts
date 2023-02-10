import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CenterComponent } from './components/center/center.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { EmployeeCrudComponent } from './components/employee-crud/employee-crud.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeCardsComponent } from './components/employee-cards/employee-cards.component';
import { Mathdemo1Component } from './components/mathdemo1/mathdemo1.component';
import { Mathdemo2Component } from './components/mathdemo2/mathdemo2.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { Mathdemo3Component } from './components/mathdemo3/mathdemo3.component';
import { MathService } from './services/math.service';
import { LoginModule } from 'src/login/login.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { CommentsComponent } from './components/comments/comments.component';
import { MyInterceptor1 } from './interceptors/my-interceptor1';
import { MyInterceptor2 } from './interceptors/my-interceptor2';
import { RetryInterceptor } from './interceptors/retry-interceptor';
import { ObservableDemo1Component } from './components/observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from './components/observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from './components/observable-demo3/observable-demo3.component';
import { ObservableDemo4Component } from './components/observable-demo4/observable-demo4.component';
import { SubjectDemo1Component } from './components/subject-demo1/subject-demo1.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { ReceiveMessageComponent } from './components/receive-message/receive-message.component';
import { ReceiveMessage2Component } from './components/receive-message2/receive-message2.component';
import { CartComponent } from './components/cart/cart.component';
import { FormDemo1Component } from './components/form-demo1/form-demo1.component';
import { FormDemo2Component } from './components/form-demo2/form-demo2.component';
import { FormDemo3Component } from './components/form-demo3/form-demo3.component';
import { FormDemo4Component } from './components/form-demo4/form-demo4.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { PermanentjobsComponent } from './components/permanentjobs/permanentjobs.component';
import { ContractjobsComponent } from './components/contractjobs/contractjobs.component';

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
    EmployeeCrudComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeCardsComponent,
    Mathdemo1Component,
    Mathdemo2Component,
    MovieListComponent,
    Mathdemo3Component,
    UserListComponent,
    CommentsComponent,
    ObservableDemo1Component,
    ObservableDemo2Component,
    ObservableDemo3Component,
    ObservableDemo4Component,
    SubjectDemo1Component,
    SendMessageComponent,
    ReceiveMessageComponent,
    ReceiveMessage2Component,
    CartComponent,
    FormDemo1Component,
    FormDemo2Component,
    FormDemo3Component,
    FormDemo4Component,
    HomeComponent,
    AboutusComponent,
    CareersComponent,
    ContactusComponent,
    NotfoundComponent,
    ProductdetailsComponent,
    ProductdetailComponent,
    PermanentjobsComponent,
    ContractjobsComponent,
  ],
  // Dependent Modules
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    LoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  // Services / Injectables
  providers: [
    MathService,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor1, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor2, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true }
  ],
  // Main Component to Bootstrap/Load
  bootstrap: [AppComponent],
})
export class AppModule {}
