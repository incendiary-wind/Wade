import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendService {
constructor( private http: HttpClient ) { }
public getWarehouses(): Observable<Model.Warehouse[]> {
    return this.http
    .get('../../../assets/warehouses.json')
    .map((data) => {
        const response = data['warehouses'] as Array<any>;
        const result = [];
        const l = response.length;
        for ( let i = 0; i < l ; i += 1 ) {
          const crs = response[i];
          result.push({
            id: crs.id,
            name: crs['warehouseName'],
            isActive: crs['active'],
            type: crs['note'] || ''
          } as Model.Warehouse);
        }
        return result;
      }  );
}
}