/* eslint-disable prettier/prettier */
import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UserSetting } from '../models/userSetting';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';

@Resolver()
export class UserSettingsResolver {
  @Query((returns) => UserSetting, { nullable: true })
  getUserSettings(@Args('userId', { type: () => Int }) userId: number) {
    return mockUserSettings.find(
      (userSetting) => userSetting.userId === userId,
    );
  }
}
