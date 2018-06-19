import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FavoriteService {

  public favorites: Observable<any[]>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.favorites = this.db.list('/starred').valueChanges();
  }
}
