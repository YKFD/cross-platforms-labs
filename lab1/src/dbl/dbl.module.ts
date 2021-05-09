import { Global, Module } from '@nestjs/common';
import { DBL_SERVICE } from 'src/core';
import { BlogRepositoryProvider } from './blog';
import { CategoryRepositoryProvider } from './category';
import { ChildrenCategoryRepositoryProvider } from './children-category';
import { DBLServiceProvider } from './dbl.service';
import { ForumRepositoryProvider } from './forum';
import { NewsRepositoryProvider } from './news';
import { TypeOrmModuleProvider } from './typeorm.provider';

@Global()
@Module({
  imports: [TypeOrmModuleProvider],
  providers: [
    NewsRepositoryProvider,
    ForumRepositoryProvider,
    BlogRepositoryProvider,
    ChildrenCategoryRepositoryProvider,
    CategoryRepositoryProvider,
    DBLServiceProvider,
  ],
  exports: [DBL_SERVICE],
})
export class DBLModule {}
