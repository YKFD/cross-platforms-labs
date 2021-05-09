import { Repository } from 'typeorm';
import { Forum } from 'src/dbl';

export type IForumRepository = Repository<Forum>;
