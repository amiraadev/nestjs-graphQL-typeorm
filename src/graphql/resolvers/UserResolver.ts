import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query()
  getUser((returns)=>User) {
    return {
      id: 1,
      username: 'amira',
      displayName: 'Allagui',
    };
  }
}
