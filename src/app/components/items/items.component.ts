// used to render a list of items 


import { Component, OnInit, Input } from '@angular/core';
import { Items } from 'src/app/models/items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  @Input() items : Items;  // bound to value of the property items from its parent componenet
  constructor() { }

  ngOnInit() {}

}
