import { Repository } from 'typeorm';
import { Blog } from 'src/dbl';

export interface IBlogRepository extends Repository<Blog> {}
