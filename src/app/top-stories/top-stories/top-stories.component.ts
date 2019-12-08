import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ItemService } from 'src/app/services/item/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss'],
})
export class TopStoriesComponent implements OnInit, OnDestroy {

  items: Item[];

  private subscription : Subscription;

  constructor(private itemService : ItemService) {
    /*  this.db.list('/v0/newstories').valueChanges().subscribe(data  => {
        this.items = data;
        console.log(data);
      })*/

  }
  ngOnInit() {
    this.subscription = this.itemService.load(0, 10).subscribe(items => {
     console.log("Hacker News API", items); 
     this.items = items.results;
  });

}

  ngOnDestroy() {

    if( this.subscription) {
      this.subscription.unsubscribe(); // to make sure resources are relased 
    }
  }

}
