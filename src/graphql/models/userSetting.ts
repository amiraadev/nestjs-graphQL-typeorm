/* eslint-disable prettier/prettier */
import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  PrimaryColumn,
  Column,
  
} from 'typeorm';

@Entity({ name: 'userSettingsEntity' })
@ObjectType()
export class UserSetting {
  @PrimaryColumn()
  @Field((type) => Int)
  userId: number;

  @Column()
  @Field({ defaultValue: false })
  receiveNotifications: boolean;

  @Column()
  @Field({ defaultValue: false })
  receiveEmails: boolean;
}
