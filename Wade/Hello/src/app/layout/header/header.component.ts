import { Component} from '@angular/core';
import {WarehousesService} from '../../services/warehouses.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private service: WarehousesService) {
   }




}
