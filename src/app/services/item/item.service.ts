import { Injectable } from '@angular/core';
import { Observable, combineLatest} from 'rxjs';
import { Items } from 'src/app/models/items';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, mergeMap } from 'rxjs/operators'; 

@Injectable()

export class ItemService {

  constructor(private db: AngularFireDatabase) { }

  
   // load subset of items pagination 
   load(offset: number, limit: number) : Observable<Items> {

    return this.db.list('/v0/topstories').valueChanges().pipe(
      map(ids => ids.slice(offset, offset + limit)),      // get only array of [offset, limit]
      mergeMap((ids: any[]) => 
        combineLatest(...ids.map(id => this.db.object('/v0/item/' + id).valueChanges()))), map((items: any) => ({
            offset,                 // specifies the position of the first loaded items 
            limit,                  // specifies the number of loaded items
            total: limit,           // the total number of items
            results: items          // the total actual number of items 
     }))

   
    ); // end of pipe
  
  } // end of load 


}
