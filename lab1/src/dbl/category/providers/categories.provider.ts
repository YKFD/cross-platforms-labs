import { Connection } from 'typeorm';
import { FactoryProvider } from '@nestjs/common';
import { CATEGORY_REPOSITORY } from 'src/core';
import { CategoryRepository } from '../repositories';

export const CategoryRepositoryProvider: FactoryProvider = {
  provide: CATEGORY_REPOSITORY,
  inject: [Connection],
  useFactory: (connection: Connection) =>
    connection.getCustomRepository(CategoryRepository),
};
