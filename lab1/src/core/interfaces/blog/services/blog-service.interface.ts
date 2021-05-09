import { BlogDto } from 'src/core/dtos';
import { Blog } from 'src/dbl';
import { DeleteResult, UpdateResult } from 'typeorm';

export interface IBlogService {
  getAll(): Promise<BlogDto[]>;
  getByCategory(category: string): Promise<BlogDto[]>;
  getByCategoryAndId(category: string, id: string): Promise<BlogDto>;
  save(blogDto: BlogDto): Promise<Blog>;
  put(id: string, blogDto: BlogDto): Promise<UpdateResult>;
  delete(id: string): Promise<DeleteResult>;
}
