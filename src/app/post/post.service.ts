import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  userData:any
  date:any
  postStatus: any="select file";
  constructor(public authD:AuthService,public firestore:AngularFirestore,  private datePipe: DatePipe,) {
    this.userData=this.authD.userData
    //console.log(this.userData);
    this.date=new Date()
    this.date = this.datePipe.transform(this.date, 'yyyy-MM-dd');

   }

  postFeed(data:any,imgUri:any){
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("userFeeds")
          .add({
            userName: this.userData.displayName,
            email:this.userData.email,
            photoURL:this.userData.photoURL,
            uid:this.userData.uid,
            content:data,
            date:this.date,
            time:new Date().toLocaleTimeString(),
            postedMedia:imgUri
          })
          .then(res => {alert("Data Posted Sucessfully");
          this.postStatus="posted"
          })
          .catch(reject => {
            console.log('catch');
          });
  });
  }
  fetchedData:any
  fetchFeeds(){
    this.fetchedData=this.firestore.collection('userFeeds').valueChanges()
    return this.fetchedData
  }

}
