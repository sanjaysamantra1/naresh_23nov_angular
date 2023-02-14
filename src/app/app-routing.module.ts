import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ContractjobsComponent } from './components/contractjobs/contractjobs.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PermanentjobsComponent } from './components/permanentjobs/permanentjobs.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthChildGuard } from './guards/auth-child.guard';
import { AuthGuard } from './guards/auth.guard';
import { HasChangesGuard } from './guards/has-changes.guard';
import { ProductsResolverService } from './services/products-resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'careers',
    component: CareersComponent,
    canActivateChild: [AuthChildGuard],
    children: [
      // { path: '', component: PermanentjobsComponent },
      { path: 'permanent', component: PermanentjobsComponent },
      { path: 'contract', component: ContractjobsComponent },
    ],
  },
  {
    path: 'contactus',
    component: ContactusComponent,
    canDeactivate: [HasChangesGuard],
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'productdetails/:id', component: ProductdetailsComponent },
  { path: 'productdetail', component: ProductdetailComponent },
  {
    path: 'dummyproducts',
    component: ProductsComponent,
    resolve: { products: ProductsResolverService },
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'grocery',
    loadChildren: () =>
      import('./grocery/grocery.module').then((m) => m.GroceryModule),
    // canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent }, // wild card route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
