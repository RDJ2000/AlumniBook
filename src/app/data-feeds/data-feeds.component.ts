import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-data-feeds',
  templateUrl: './data-feeds.component.html',
  styleUrls: ['./data-feeds.component.scss']
})
export class DataFeedsComponent implements OnInit {

  constructor(private postD:PostService) { }
  allFeeds:any
  ngOnInit(): void {


    this.postD.fetchFeeds().subscribe((data: any)=>{
      this.allFeeds=data
    })

  }


}
