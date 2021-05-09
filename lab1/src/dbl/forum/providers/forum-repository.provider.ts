import { FactoryProvider } from '@nestjs/common';
import { Connection } from 'typeorm';
import { FORUM_REPOSITORY } from 'src/core';
import { ForumRepository } from '../repositories';

export const ForumRepositoryProvider: FactoryProvider = {
  provide: FORUM_REPOSITORY,
  inject: [Connection],
  useFactory: (connection: Connection) =>
    connection.getCustomRepository(ForumRepository),
};
