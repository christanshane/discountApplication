import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/observable';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/discounts', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;

  }

  login(){
    // this.afAuth.auth.signInWithEmailAndPassword();
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  Send(desc: string){
    this.items.push({message: desc});
    this.msgVal = '';
  }
}
