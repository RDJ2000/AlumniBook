import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PostService } from '../post/post.service';
import { AngularFireStorage , AngularFireUploadTask,AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-post',
  templateUrl: './feed-post.component.html',
  styleUrls: ['./feed-post.component.scss']
})
export class FeedPostComponent implements OnInit {
  ref: any;
  task: any;
  uploadProgress: any;
  downloadURL:any

  uri:any="NA"
  randomFile: any;
  randomFileName: any;
  status: any;
  name: any;
  selectedFile: any;
  constructor(private router:Router ,private authD:AuthService,private PS:PostService,private afStorage: AngularFireStorage) { }
  Content:any
  ngOnInit(): void {

  }

    onPost(){
    
        this.PS.postFeed(this.Content,this.downloadURL).then(()=>{
          console.log("Posted Successfully")
        }).catch((error)=>{
          console.log(error)
        })
      console.log("inpost");
      
     
     
    }
  //   upload() {
     
  //     this.ref = this.afStorage.ref(this.randomFileName);
  //     this.task = this.ref.put(this.randomFile);
      
  //     this.downloadURL = this.afStorage.refFromURL("gs://alumnisearch-9ab50.appspot.com/"+this.randomFileName).getDownloadURL()
      

  //     this.downloadURL.subscribe((url: any)=>{
  //       if(url){
            
  //           this.uri=url
  //           console.log(this.uri);
  //           this.status="Posted Sucessfully"
  //       }
  //       else if(!url){
          
  //         this.status="something gone wrong"
  //         console.log("something went wrong please try again");
  //       }
       
  //    })
  //     console.log(this.PS.postStatus);
      
  //   }
  //  getFile(event:any){
  //   this.randomFileName =  Math.random().toString(36).substring(2);
  //   this.randomFile = event.target.files[0]
  //  }
  upload() {
    
    // const randomId = Math.random().toString(36).substring(2);
    // let ref
    // this.name = event.target.files[0].name
    // ref=this.ref = this.afStorage.ref(this.name);
    // this.task = this.ref.put(event.target.files[0]);
    
    // this.uploadProgress = this.task.percentageChanges();
    // if(this.uploadProgress){
    // this.downloadURL=this.afStorage.refFromURL("gs://alumnisearch-9ab50.appspot.com/"+randomId).getDownloadURL()
    // this.downloadURL.subscribe((url: any)=>{
    //   console.log(url);
      
    // })
    
  //}
  this.afStorage.upload(this.name,this.selectedFile).snapshotChanges().pipe(
    
    finalize(() => {
      this.uploadProgress=true
      this.ref.getDownloadURL().subscribe((url:any) => {
        this.downloadURL = url;
        console.log(this.downloadURL);
        this.status="file uploaded successfully"
        this.uploadProgress=false
        alert('Upload Successful');
        this.router.navigate(['home/feeds']);
      })
    })
  ).subscribe();
}
getFile(event:any){
    this.name = event.target.files[0].name
    this.selectedFile=event.target.files[0]
  this.ref = this.afStorage.ref(this.name);
  }

}
