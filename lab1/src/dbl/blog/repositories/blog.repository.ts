import { EntityRepository, Repository } from 'typeorm';
import { IBlogRepository } from 'src/core';
import { Blog } from '../entities';

@EntityRepository(Blog)
export class BlogRepository
  extends Repository<Blog>
  implements IBlogRepository {}
