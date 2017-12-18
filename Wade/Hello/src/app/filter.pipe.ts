import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
      name: 'filter'
  })

  export class FilterPipe implements PipeTransform {
          transform(warehouses: any, search: any): any {
          if(search === undefined) return warehouses; 
          return warehouses.filter(function(warehouse){
              return warehouse.name.toLowerCase().includes(search.toLowerCase());
          } )
         }
  }
