import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  @Input() username: string = 'Гость';
  constructor() { }

  ngOnInit() {
  }

}
