import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Items } from 'src/app/models/items';
import { Item } from 'src/app/models/item';

import * as range from 'lodash.range';

@Injectable()
export class MockService  {

  constructor() {
   
  }

  load(offset?: number, limit?: number) : Observable<Items> {
    // get mock data
    const results : Item[] = range(offset, offset + limit).map((index : number) => ({
      id: index, 
      title: `Item ${index + 1}`, 
      url: `http://www.example.com/item${index}`,
      by: `demo`,
      time: new Date().getTime() / 1000,
      score: index,
    }));

    console.log("mock service result: ", results); 
    return of<Items>({
      offset,
      limit,
      total: offset + limit,
      results,                 // result stores the list of items 
    }); 
  }

}
