import { Injectable } from '@nestjs/common';
import { User } from './../entity/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updatedUser: User) {
    const user = this.findOne(id);
    if (user) {
      Object.assign(user, updatedUser);
    }
  }

  remove(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
}
