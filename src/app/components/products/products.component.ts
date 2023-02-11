import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  allProducts: any[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    /* this.productsService.getAllProducts().subscribe((response: any) => {
      this.allProducts = response.products;
    }); */

    this.activatedRoute.data.subscribe((response: any) => {
      this.allProducts = response.products.products; // to be shown in UI
    });
  }
}
