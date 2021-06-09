import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class GroupChatService {
  userData: any;
  date: any;
  fetchedData: any;

  constructor(public firestore:AngularFirestore,public authD:AuthService, private datePipe: DatePipe) {
    this.userData=this.authD.userData
    console.log(this.userData);
    this.date=new Date()
    this.date = this.datePipe.transform(this.date, 'yyyy-MM-dd');
   }

   onComment(data:any){
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("groupChat")
          .add({
            userName: this.userData.displayName,
            content:data,
            date:this.date,
            time:new Date().toLocaleTimeString(),
            
          })
          .then(res => {console.log("Data Posted Sucessfully");
          }, err => reject(err));
  });
   }
   fetchComments(){
    this.fetchedData=this.firestore.collection('groupChat').valueChanges()
    return this.fetchedData
   }

}
