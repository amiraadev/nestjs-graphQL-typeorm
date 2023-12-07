import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { UserSetting } from '../models/userSetting';

export const incrementalId = 5;

@Resolver((of) => User)
export class UserSettingResolver {
  @Mutation((returns) => UserSetting)
  createUserSettings() {}
}
