import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'careers',
    component: CareersComponent,
    children: [
      { path: '', component: PermanentjobsComponent },
      { path: 'permanent', component: PermanentjobsComponent },
      { path: 'contract', component: ContractjobsComponent },
    ],
  },
  { path: 'contactus', component: ContactusComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'productdetails/:id', component: ProductdetailsComponent },
  { path: 'productdetail', component: ProductdetailComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent }, // wild card route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
