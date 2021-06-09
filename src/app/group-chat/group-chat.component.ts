import { Component, OnInit } from '@angular/core';



import { DataT } from './data-t';
import { GroupChatService } from './group-chat.service';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss']
})
export class GroupChatComponent implements OnInit {
  livechat: any;

  
  constructor(public groupC:GroupChatService) { }
  data=new DataT('','')
  ngOnInit(): void {
    this.fetchCom()
  }
  ngOnChanges(){
    this.fetchCom()
  }
  comment: any

  postCom(){
      this.groupC.onComment(this.comment)
      
    }

  fetchCom(){
    this.groupC.fetchComments().subscribe((data: any)=>{
      this.livechat=data
      this.livechat.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => {
        return <any>new Date(b.date) - <any>new Date(a.date);
      });
      console.log(this.livechat);
      
    })
  }
}




