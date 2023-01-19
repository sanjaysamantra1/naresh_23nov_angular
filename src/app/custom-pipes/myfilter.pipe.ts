import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter',
})
export class MyfilterPipe implements PipeTransform {
  transform(employees: any[], searchText: string, field: string) {
    if (!employees) return [];
    if (!searchText) return employees;

    searchText = searchText.toLowerCase();
    return employees.filter((emp) => {
      return emp[field].toString().toLowerCase().includes(searchText);
    });
  }
}
