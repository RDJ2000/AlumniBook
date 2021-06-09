import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class AlumniService {
  fetchingData:any
  constructor(public firestore:AngularFirestore) {
    this.fetchingData=firestore.collection('users').valueChanges()
  }

  fetchData(){
    return this.fetchingData
  }

}
