import { DeleteResult, UpdateResult } from 'typeorm';
import { ForumDto } from 'src/core';
import { Forum } from 'src/dbl';

export interface IForumService {
  getAll(): Promise<ForumDto[]>;
  save(forumDto: ForumDto): Promise<Forum>;
  put(id: string, forumDto: ForumDto): Promise<UpdateResult>;
  getByCategory(category: string): Promise<ForumDto[]>;
  getByCategoryAndId(category: string, id: string): Promise<ForumDto>;
  delete(id: string): Promise<DeleteResult>;
}
