/* eslint-disable prettier/prettier */
import { Resolver, Query,Args ,Int} from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';

@Resolver()
export class UserResolver {
  @Query((returns) => User, {nullable:true})
  getUserById(@Args('id',{type:() => Int}) id:number) {
    return mockUsers.find((user) => user.id === id)
  }

  @Query(() => [User])
  getUsers(){
    return mockUsers
  }
}
