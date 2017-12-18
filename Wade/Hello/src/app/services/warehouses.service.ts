import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class WarehousesService {
constructor(private http: Http) {}
getWarehousesList(warehouse: string): Observable<any> {
    return this.http.get(`/warehouse/${warehouse}`)
    .map((response: Response) => response.json())
}
}