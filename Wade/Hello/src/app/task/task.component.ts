import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-task',
templateUrl: './task.component.html',
styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
//tas: Array<any>;

tas: Model.Task[];
status: Model.TaskStatus[];
constructor() {
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
  ];
}
ngOnInit() {/*
this.tas = this.getTask();
console.log(this.tas);
}
getTask() {
      return [
          {
           id: 1,
           title: 'Cleaning',
           descrption: 'None',
           statusId: 1,
           deadline: new Date(2017, 8, 26)
          }
     ];
}*/
}
}
