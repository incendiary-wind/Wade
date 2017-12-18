import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

//tas: Model.Task[];
  //  status: Model.TaskStatus[];

cards: Model.CArdExp[];
minLength: number = 3;
warehouses: Model.Warehouse[];



  constructor(private backend: BackendService) {
    }
      ngOnInit() {
        this.backend.getWarehouses()
        .subscribe((data: Model.Warehouse[]) => this.warehouses = data);
      }
}
