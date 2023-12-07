/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSetting } from 'src/graphql/models/UserSetting';
import { CreateUserSettingsInput } from 'src/graphql/utils/CreateUserSettingsInput';

@Injectable()
export class UserSettingsService {
  constructor(
    @InjectRepository(UserSetting)
    private userSettingsRepository: Repository<UserSetting>,
  ) {}
  getUserSettingById(userId: number) {
    return this.userSettingsRepository.findOneBy({ userId });
  }
  createUserSettings(CreateUserSettingsData: CreateUserSettingsInput) {
    const newUserSetting = this.userSettingsRepository.create(
      CreateUserSettingsData,
    );
    return this.userSettingsRepository.save(newUserSetting);
  }
}
