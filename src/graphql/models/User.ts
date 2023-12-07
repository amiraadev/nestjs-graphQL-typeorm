/* eslint-disable prettier/prettier */
import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { UserSetting } from './userSetting';

@Entity({ name: 'usersEntity' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field({ nullable: true })
  displayName?: string;

  @OneToOne(() =>UserSetting)
  @JoinColumn()
  @Field({ nullable: true })
  settings?: UserSetting;
}
