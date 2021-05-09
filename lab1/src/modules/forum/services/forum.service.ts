import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  DBL_SERVICE,
  ForumDto,
  IForumService,
  IParser,
  JSON_PARSER,
} from 'src/core';
import { DBLService, Forum } from 'src/dbl';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class ForumService implements IForumService, OnModuleInit {
  @Inject(DBL_SERVICE)
  private readonly dbl: DBLService;
  @Inject(JSON_PARSER)
  private readonly parser: IParser;

  onModuleInit() {
    try {
      const dtos: ForumDto[] = this.parser.getObject(
        `${this.parser.defaultPath}/forums.json`,
      );
      dtos.forEach((dto) => this.save(dto));
    } catch (exc) {
      console.log(exc.message);
    }
  }

  getAll(): Promise<ForumDto[]> {
    return this.dbl.forumRepository.find({ order: { id: 'DESC' } });
  }

  getByCategory(category: string): Promise<ForumDto[]> {
    return this.dbl.forumRepository.find({
      where: { category },
      order: { id: 'DESC' },
    });
  }

  getByCategoryAndId(category: string, id: string): Promise<ForumDto> {
    return this.dbl.forumRepository.findOne({
      where: { id, category },
      order: { id: 'DESC' },
    });
  }

  save(forumDto: ForumDto): Promise<Forum> {
    const entity: Forum = this.dbl.forumRepository.create({ ...forumDto });
    return this.dbl.forumRepository.save(entity);
  }
  
  put(id: string, forumDto: ForumDto): Promise<UpdateResult> {
    const entity: Forum = this.dbl.forumRepository.create({ ...forumDto });
    return this.dbl.forumRepository.update({ id }, entity);
  }

  delete(id: string): Promise<DeleteResult> {
    return this.dbl.forumRepository.delete({ id });
  }
}
