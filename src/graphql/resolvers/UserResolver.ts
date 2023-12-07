/* eslint-disable prettier/prettier */
import { Resolver, Query,Args ,Int,ResolveField,Parent} from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { UserSetting } from '../models/userSetting';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => User, {nullable:true})
  getUserById(@Args('id',{type:() => Int}) id:number) {
    return mockUsers.find((user) => user.id === id)
  }

  @Query(() => [User])
  getUsers(){
    return mockUsers
  }

  @ResolveField((returns) => UserSetting,{name:"settings"})
  getUserSettings(@Parent() user:User){
    console.log(user);
    return  mockUserSettings.find((setting) => setting.userId === user.id)

    
  }
}
