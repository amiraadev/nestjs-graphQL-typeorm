import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './users/UserResolver';
import { UserSettingResolver } from './users/UserSettingResolver';
import ormConfig from './config/orm.config';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: ormConfig,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [UserSettingResolver],
})
export class AppModule {}
