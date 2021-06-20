import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  PYYear: any="NA"
  cName:any="NA"
  Cyear:any='NA'
  POYear:any='NA'
  WAs:any='NA'
  branch:any='NA'
  displayName:any='NA'
  constructor(private Auth:AuthService) { }
  role:any='NA'
  profileLink:any='NA'

  email:any
  ngOnInit(): void {
    this.profileLink=this.Auth.userData.photoURL
    this.email=this.Auth.userData.email
    this.displayName=this.Auth.userData.displayName
  }
  updateDetails(){
    const data={
      displayName:this.displayName,
      currentYear:this.Cyear,
      PassoutYear:this.POYear,
      workingAs:this.WAs,
      branch:this.branch,
      role:this.role,
      companyName:this.cName,
      yearsOfExperience:this.PYYear

    }
   this.Auth.updateUserProfile(data)
  }
}
