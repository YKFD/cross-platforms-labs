import { FactoryProvider } from '@nestjs/common';
import { Connection } from 'typeorm';
import { NEWS_REPOSITORY } from 'src/core';
import { NewsRepository } from 'src/dbl';

export const NewsRepositoryProvider: FactoryProvider = {
  provide: NEWS_REPOSITORY,
  inject: [Connection],
  useFactory: (connection: Connection) =>
    connection.getCustomRepository(NewsRepository),
};
