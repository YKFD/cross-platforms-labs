import { ClassProvider, Inject, Injectable } from '@nestjs/common';
import {
  INewsRepository,
  DBL_SERVICE,
  NEWS_REPOSITORY,
  FORUM_REPOSITORY,
  IForumRepository,
  BLOG_REPOSITORY,
  IBlogRepository,
  CHILDREN_CATEGORY_REPOSITORY,
  IChildrenCategoryRepository,
  CATEGORY_REPOSITORY,
  ICategoryRepository,
} from 'src/core';

@Injectable()
export class DBLService {
  @Inject(NEWS_REPOSITORY)
  public readonly newsRepository: INewsRepository;
  @Inject(FORUM_REPOSITORY)
  public readonly forumRepository: IForumRepository;
  @Inject(BLOG_REPOSITORY)
  public readonly blogRepository: IBlogRepository;
  @Inject(CHILDREN_CATEGORY_REPOSITORY)
  public readonly childrenCategoryRepository: IChildrenCategoryRepository;
  @Inject(CATEGORY_REPOSITORY)
  public readonly categoryRepository: ICategoryRepository;
}

export const DBLServiceProvider: ClassProvider = {
  provide: DBL_SERVICE,
  useClass: DBLService,
};
