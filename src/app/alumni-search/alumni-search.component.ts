import { Component, OnInit } from '@angular/core';
import { AlumniService } from '../alumniService/alumni.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alumni-search',
  templateUrl: './alumni-search.component.html',
  styleUrls: ['./alumni-search.component.scss']
})
export class AlumniSearchComponent implements OnInit {
  keyword:any
  constructor(private AS:AlumniService) {  this.fetchedUsers()}
  fetchedData:any
  ngOnInit() {

  }
  fetchedUsers(){
    this.AS.fetchData().subscribe((data: any)=>{
      console.log(data);
      this.fetchedData=data

    })
  }
}
