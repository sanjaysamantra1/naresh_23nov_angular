import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, switchMap, map, exhaustMap, fromEvent } from 'rxjs';

interface PeopleData {
  name: string;
  birthYear: string;
  height: number;
  weight: number;
  eyeColor: string;
}

@Component({
  selector: 'app-observable-demo4',
  templateUrl: './observable-demo4.component.html',
  styleUrls: ['./observable-demo4.component.css'],
})
export class ObservableDemo4Component implements OnInit {
  searchResult$: Observable<PeopleData> | undefined;

  search = new FormControl();

  searchFormGroup = new FormGroup({
    search: this.search,
  });

  constructor(private http: HttpClient) {
    console.log(this.search);
  }

  ngOnInit() {
    this.exhaustMapDemo();

    this.searchResult$ = this.search.valueChanges.pipe(
      switchMap((term) =>
        this.http.get<any>(`https://swapi.dev/api/people/?search=${term}`)
      ),
      map((response) =>
        response.count > 0 ? response.results[0] : { name: 'No results' }
      ),
      map(
        (response) =>
          ({
            name: response.name,
            birthYear: response.birth_year,
            height: Number(response.height),
            weight: Number(response.mass),
            eyeColor: response.eye_color,
          } as PeopleData)
      )
    );
  }

  exhaustMapDemo() {
    const clicks = fromEvent(document, 'click');

    clicks.pipe(
      exhaustMap(() => this.http.get('https://fakestoreapi.com/products'))
    ).subscribe((x) => console.log(x));
    
  }

  
}
