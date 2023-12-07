/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/graphql/models/User';
import { CreateUserInput } from 'src/graphql/utils/CreateUserInput';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.usersRepository.find();
  }
  getUserById(id: number) {
    return this.usersRepository.findOneBy({ id });
  }
  createUser(CreateUserData: CreateUserInput) {
    const newUser = this.usersRepository.create(CreateUserData);
    return this.usersRepository.save(newUser);
  }
}
