import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataFeedsComponent } from './data-feeds/data-feeds.component';
import { AlumniSearchComponent } from './alumni-search/alumni-search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { FeedPostComponent } from './feed-post/feed-post.component';
import { ParentComponent } from './parent/parent.component';
import { ParentFeedComponent } from './parent-feed/parent-feed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DatePipe } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GroupChatComponent } from './group-chat/group-chat.component';
@NgModule({
  declarations: [
    AppComponent,
    AlumniSearchComponent,
    DataFeedsComponent,
    FeedPostComponent,
    NavBarComponent,
    NoticeBoardComponent,
    ParentComponent,
    ParentFeedComponent,
    LoginComponent,
    ProfileComponent,
    GroupChatComponent,



  ],
  imports: [

BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
  
    FormsModule, BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
