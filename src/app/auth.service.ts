import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthD } from './auth-d';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;

  constructor(
      private afAuth: AngularFireAuth,
      private afs: AngularFirestore,
      private router: Router
  ) {

    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
          // Logged in
        if (user) {
          return this.afs.doc<AuthD>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
  }
  userData:any
  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user:any) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<AuthD> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    this.saveUserData(data)
    console.log(data);
    this.router.navigate(['home'])


    return userRef.set(data, { merge: true })

  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }
  saveUserData(userData:any){
    this.userData=userData
  }

  updateUserProfile(data:any){
    console.log(data);

    this.afs.collection("users").doc(this.userData.uid).set({
      displayName:data.displayName,
      currentYear:data.currentYear,
      PassoutYear:data.PassoutYear,
      workingAs:data.workingAs,
      branch:data.branch,
      role:data.role,
      uid:this.userData.uid,
      photoURL:this.userData.photoURL,
      email:this.userData.email
  })
  .then(() => {
      console.log("Document successfully written!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });
  }
  }

