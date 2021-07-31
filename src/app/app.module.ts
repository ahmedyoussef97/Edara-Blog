import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { MainPostsComponent } from './main-posts/main-posts.component';
import { ListPostComponent } from './list-post/list-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    MainPostsComponent,
    ListPostComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
