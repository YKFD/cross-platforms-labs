import { ForumDto } from 'src/core';
import { NewsDto } from 'src/core/dtos';
import { News } from 'src/dbl';
import { DeleteResult, UpdateResult } from 'typeorm';

export interface INewsService {
  getAll(): Promise<NewsDto[]>;
  getByCategory(category: string): Promise<NewsDto[]>;
  getByCategoryAndId(category: string, id: string): Promise<NewsDto>;
  save(newsDto: NewsDto): Promise<News>;
  put(id: string, newsDto: NewsDto): Promise<UpdateResult>;
  delete(id: string): Promise<DeleteResult>;
}
