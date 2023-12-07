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

  createUserSettings(CreateUserSettingsData: CreateUserSettingsInput) {
    const newUser = this.userSettingsRepository.create(CreateUserSettingsData);
    return this.userSettingsRepository.save(newUser);
  }
}
