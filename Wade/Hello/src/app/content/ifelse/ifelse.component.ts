import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent implements OnInit {

  warehouses: Model.Warehouse[];
  activeOnly: boolean;

  constructor(private backend: BackendService) {

    this.activeOnly = true;
}
  filterWarehousesByActiveStatus(event) {
    this.activeOnly = !this.activeOnly;
    console.log('Стан змінено');
    console.log(event);
   }
  writeWarehouseInfo(warehous: Model.Warehouse ) {
    console.log(warehous);
  }

  ngOnInit() {
    this.backend.getWarehouses()
    .subscribe((data: Model.Warehouse[]) => this.warehouses = data);
  }

}
