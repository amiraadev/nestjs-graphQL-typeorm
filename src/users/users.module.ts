/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserResolver } from './UserResolver';
import { UserService } from './UserService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { UserSetting } from 'src/graphql/models/UserSetting';
import { UserSettingsService } from './UserSettingsService';
import { UserSettingResolver } from 'src/graphql/resolvers/UserSettingResolver';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [
    UserResolver,
    UserService,
    UserSettingsService,
    UserSettingResolver,
  ],
})
export class UsersModule {}
