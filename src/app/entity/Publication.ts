import {User} from "./User";

export class Publication{
  id:number;
  text:string;
  image:File;
  likes:number;
  user:User;

  constructor(id: number, text: string, image:File, likes:number, user: User) {
    this.id = id;
    this.text = text;
    this.image = image;
    this.likes = likes;
    this.user = user;
  }
}
