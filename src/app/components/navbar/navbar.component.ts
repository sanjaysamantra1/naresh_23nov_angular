import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  myNavLinks = [
    { text: 'Home', link: 'home' },
    { text: 'About-us', link: 'aboutus' },
    { text: 'Contact Us', link: 'contactus' },
    { text: 'Careers', link: 'careers' },
    { text: 'Product List', link: 'products' },
    { text: 'Products', link: 'dummyproducts' },
  ];
}
