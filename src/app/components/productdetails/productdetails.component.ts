import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  prodId: any = null;
  prod: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.prodId = params['id'];

      this.httpClient
        .get(`https://fakestoreapi.com/products/${this.prodId}`)
        .subscribe((prodDetails) => {
          this.prod = prodDetails;
        });
    });
  }
}
