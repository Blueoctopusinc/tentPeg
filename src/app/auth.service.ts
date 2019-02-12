import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private myUser: firebase.User;
  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(myUser => {
      this.myUser = myUser;
    });
   }
}
