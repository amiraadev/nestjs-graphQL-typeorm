import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './graphql/resolvers/UserResolver';
import { UserSettingResolver } from './graphql/resolvers/UserSettingResolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    TypeOrmModule.forRoot<ApolloDriverConfig>,
  ],
  controllers: [],
  providers: [UserResolver, UserSettingResolver],
})
export class AppModule {}
