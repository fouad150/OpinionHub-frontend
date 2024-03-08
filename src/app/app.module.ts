import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PublicationListComponent} from "./component/publication/publication-list/publication-list.component";
import {AddEditPublicationComponent} from "./component/publication/add-edit-publication/add-edit-publication.component";
import {AddEditCommentComponent} from "./component/comment/add-edit-comment/add-edit-comment.component";
import {CommentListComponent} from "./component/comment/comment-list/comment-list.component";
import {AddEditCommunityComponent} from "./component/community/add-edit-community/add-edit-community.component";
import {CommunityListComponent} from "./component/community/community-list/community-list.component";
import {LoginComponent} from "./component/user/login/login.component";
import {RegisterComponent} from "./component/user/register/register.component";
import {ProfileComponent} from "./component/user/profile/profile.component";

@NgModule({
  declarations: [
    AppComponent,
    PublicationListComponent,
    AddEditPublicationComponent,
    AddEditCommentComponent,
    CommentListComponent,
    AddEditCommunityComponent,
    CommunityListComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
