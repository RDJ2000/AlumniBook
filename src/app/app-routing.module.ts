import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  AlumniSearchComponent
} from './alumni-search/alumni-search.component';
import {
  DataFeedsComponent
} from './data-feeds/data-feeds.component';
import {
  FeedPostComponent
} from './feed-post/feed-post.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { LoginComponent } from './login/login.component';
import {
  ParentFeedComponent
} from './parent-feed/parent-feed.component';
import {
  ParentComponent
} from './parent/parent.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
    path: 'home',
    component: ParentComponent,
    children: [{
        path: 'feeds',
        component: DataFeedsComponent
      },
      {
        path: 'search',
        component: AlumniSearchComponent
      },
      {
        path:'addpost',
        component: FeedPostComponent
      },
      {
        path:'FAQ',
        component: DataFeedsComponent
      },
      {
        path:'profile',
        component: ProfileComponent
      },
      {
        path:'groupChat',
        component: GroupChatComponent
      },

      {
        path: '',
        component: DataFeedsComponent
      },
    ]
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
