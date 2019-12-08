import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Items } from 'src/app/models/items';

@Injectable()

export class ItemService {

  constructor() { }
   // load subset of items pagination 
   load(offset: number, limit: number) : Observable<Items> {
     return of({
       offset: 0,   // specifies the position of the first loaded items 
       limit: 0,    // specifies the number of loaded items
       total: 0,    // the total number of items
       results: []  // the total actual number of items 
     });
   }
}
