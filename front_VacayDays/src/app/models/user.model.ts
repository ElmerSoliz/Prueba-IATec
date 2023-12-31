export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  holidays: number;
  createdAt: Date;
  nickName: string;
}

export class UserClass implements User {
  id: number;
  username: string;
  email: string;
  password: string;
  holidays: number;
  createdAt: Date;
  nickName: string;
  // id: number;
  // username: string;
  // email: string;
  // password: string;
  // holidays: number;
  // createdAt: Date;
  // nickName: string;

  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.holidays = user.holidays;
    this.createdAt = user.createdAt;
    this.nickName = user.nickName;
  }
}