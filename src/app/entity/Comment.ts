import {User} from "./User";
import {Publication} from "./Publication";

export class Comment{
 id:number;
 content:string;
 user:User;
 publication:Publication;

  constructor(id: number, content: string, user: User, publication: Publication) {
    this.id = id;
    this.content = content;
    this.user = user;
    this.publication = publication;
  }
}
