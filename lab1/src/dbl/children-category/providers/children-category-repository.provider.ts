import { FactoryProvider } from '@nestjs/common';
import { CHILDREN_CATEGORY_REPOSITORY } from 'src/core';
import { Connection } from 'typeorm';
import { ChildrenCategoryRepository } from '../repositories';

export const ChildrenCategoryRepositoryProvider: FactoryProvider = {
  provide: CHILDREN_CATEGORY_REPOSITORY,
  inject: [Connection],
  useFactory: (connection: Connection) =>
    connection.getCustomRepository(ChildrenCategoryRepository),
};
