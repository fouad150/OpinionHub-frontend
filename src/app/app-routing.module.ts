import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicationListComponent} from "./component/publication/publication-list/publication-list.component";
import {CommentListComponent} from "./component/comment/comment-list/comment-list.component";
import {LoginComponent} from "./component/user/login/login.component";
import {RegisterComponent} from "./component/user/register/register.component";
import {ProfileComponent} from "./component/user/profile/profile.component";

const routes: Routes = [
  {path:"publications", component:PublicationListComponent},
  {path:"comments", component:CommentListComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"profile", component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
