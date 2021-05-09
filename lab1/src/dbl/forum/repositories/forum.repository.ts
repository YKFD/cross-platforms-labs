import { IForumRepository } from 'src/core';
import { EntityRepository, Repository } from 'typeorm';
import { Forum } from '../entities';

@EntityRepository(Forum)
export class ForumRepository
  extends Repository<Forum>
  implements IForumRepository {}
