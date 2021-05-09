import { INewsRepository } from 'src/core';
import { EntityRepository, Repository } from 'typeorm';
import { News } from '../entities';

@EntityRepository(News)
export class NewsRepository
  extends Repository<News>
  implements INewsRepository {}
