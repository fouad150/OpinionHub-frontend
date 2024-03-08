import {User} from "./User";

export class Publication{
  id:number;
  content:string;
  publicationType:string;
  votes:string;
  user:User;

  constructor(id: number, content: string, publicationType: string, votes: string, user: User) {
    this.id = id;
    this.content = content;
    this.publicationType = publicationType;
    this.votes = votes;
    this.user = user;
  }
}
