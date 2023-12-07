/* eslint-disable prettier/prettier */
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserSetting } from '../models/userSetting';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { Inject } from '@nestjs/common';
import { UserSettingsService } from '../../users/UserSettingsService';

export const incrementalId = 5;

@Resolver()
export class UserSettingResolver {
  constructor(@Inject(UserSettingsService) private userSettingsService:UserSettingsService) { }

  @Mutation((returns) => UserSetting)
  createUserSettings(
    @Args('CreateUserSettingsData')
    CreateUserSettingsData: CreateUserSettingsInput,
  ) {
    return this.userSettingsService.createUserSettings(CreateUserSettingsData);

  }
}
