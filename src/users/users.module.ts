import { Module } from '@nestjs/common';
import { UserResolver } from './UserResolver';
import { UserService } from './UserService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService],
})
export class UsersModule {}
