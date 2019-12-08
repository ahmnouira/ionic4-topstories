import { Component, OnInit, OnDestroy } from '@angular/core';
import { Items } from 'src/app/models/items';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/services/item/item.service';
import { MockService } from 'src/app/services/mock/mock.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss'],
})
export class TopStoriesComponent implements OnInit, OnDestroy {

  items: Item[];

  private subscription : Subscription;

  constructor(private itemService: MockService) { }

  ngOnInit() {

    this.subscription = this.itemService.load(0, 10).subscribe(items => this.items = items.results); 
    console.log("items:", this.items);
  }

  ngOnDestroy() {

    if( this.subscription) {
      this.subscription.unsubscribe(); // to make sure resources are relased 
    }
  }

}
