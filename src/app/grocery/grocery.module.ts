import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceryRoutingModule } from './grocery-routing.module';
import { GroceryComponent } from './grocery.component';
import { Grocery1Component } from './components/grocery1/grocery1.component';


@NgModule({
  declarations: [
    GroceryComponent,
    Grocery1Component
  ],
  imports: [
    CommonModule,
    GroceryRoutingModule
  ]
})
export class GroceryModule { }
