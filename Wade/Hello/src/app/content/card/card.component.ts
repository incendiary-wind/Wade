import { Component, OnInit } from '@angular/core';
// import * as Model from '../../model/model'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

//tas: Model.Task[];
  //  status: Model.TaskStatus[];

  //cards: Model.Card[];
    constructor() {
  /*
      this.cards = [
        {
          id: 1,
          units: 'штуки',
          cost: 
          datezap: 
          docnumber::
          controll:
          status:

        }
      ];
    this.tas = [
        {
          id: 1,
          title: 'Cleaning',
          descrption: 'None',
          statusId: 1,
          deadline: new Date(2017, 8, 26)
        },
        {
          id: 1,
          title: 'Washing up',
          descrption: 'None',
          statusId: 2,
          deadline: new Date(2017, 8, 26)
        },
      ];
    
      this.status = [
        {
        id: 1,
        title: 'Не выполнено'
      },
      {
        id: 2,
        title: 'Выполнено'
      }
      ];*/
   }

  ngOnInit() {
  
  }

}
