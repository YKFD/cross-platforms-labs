import { News } from 'src/dbl';
import { Repository } from 'typeorm';

export interface INewsRepository extends Repository<News> {}
