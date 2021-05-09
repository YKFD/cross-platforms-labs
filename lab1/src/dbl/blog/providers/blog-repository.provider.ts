import { FactoryProvider } from '@nestjs/common';
import { BLOG_REPOSITORY } from 'src/core';
import { Connection } from 'typeorm';
import { BlogRepository } from '../repositories';

export const BlogRepositoryProvider: FactoryProvider = {
  provide: BLOG_REPOSITORY,
  inject: [Connection],
  useFactory: (connection: Connection) =>
    connection.getCustomRepository(BlogRepository),
};
