/* eslint-disable prettier/prettier */
import { Resolver, Query } from '@nestjs/graphql';
import { User } from '../models/User';

@Resolver()
export class UserResolver {
  @Query((returns) => User)
  getUser() {
    return {
      id: 1,
      username: 'amira',
      displayName: 'Allagui',
    };
  }
}
