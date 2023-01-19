import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories = [
    {
      name: 'Mobile',
      img_src:
        'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
    },
    {
      name: 'Fashion',
      img_src:
        'https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100',
    },
    {
      name: 'Electronics',
      img_src:
        'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
    },
    {
      name: 'Home',
      img_src:
        'https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100',
    },
    {
      name: 'Appliances',
      img_src:
        'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100',
    },
    {
      name: 'Travel',
      img_src:
        'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100',
    },
    {
      name: 'Top Offers',
      img_src:
        'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100',
    },
    {
      name: 'Toys',
      img_src:
        'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100',
    },
    {
      name: '2 Wheelers',
      img_src:
        'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
