/* eslint-disable prettier/prettier */
import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';
import { User } from '../graphql/models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { UserSetting } from '../graphql/models/userSetting';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';
import { UserService } from './UserService';
import { Inject } from '@nestjs/common';

export const incrementalId = 5;

@Resolver((of) => User)
export class UserResolver {
  constructor(@Inject(UserService) private userService:UserService) { }
  @Query((returns) => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }

  @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    console.log(user);
    return mockUserSettings.find((setting) => setting.userId === user.id);
  }

  @Mutation((returns) => User)
  createUser(
    @Args('CreateUserData') CreateUserData:CreateUserInput
  ) {
    return this.userService.createUser(CreateUserData);

  }
}
