import { EntityRepository, Repository } from 'typeorm';
import { IChildrenCategoryRepository } from 'src/core';
import { ChildrenCategory } from '../entities';

@EntityRepository(ChildrenCategory)
export class ChildrenCategoryRepository
  extends Repository<ChildrenCategory>
  implements IChildrenCategoryRepository {}
