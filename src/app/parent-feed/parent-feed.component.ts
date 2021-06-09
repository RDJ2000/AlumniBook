import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-parent-feed',
  templateUrl: './parent-feed.component.html',
  styleUrls: ['./parent-feed.component.scss']
})
export class ParentFeedComponent implements OnInit {

  constructor(public Auth:AuthService) { }
  username:any
  profileLink:any
  ngOnInit(): void {
    this.username=this.Auth.userData.displayName
    this.profileLink=this.Auth.userData.photoURL

  }
  logOut(){
    this.Auth.signOut().then(()=>{
      alert("SignOut Successful")
    })
  }

}
