/* eslint-disable prettier/prettier */
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserSetting } from '../graphql/models/userSetting';
import { CreateUserSettingsInput } from '../graphql/utils/CreateUserSettingsInput';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';

export const incrementalId = 5;

@Resolver()
export class UserSettingResolver {
  @Mutation((returns) => UserSetting)
  createUserSettings(
    @Args('CreateUserSettingsData')
    CreateUserSettingsData: CreateUserSettingsInput,
  ) {
    console.log(CreateUserSettingsData);
    mockUserSettings.push(CreateUserSettingsData);
    return CreateUserSettingsData;
  }
}
