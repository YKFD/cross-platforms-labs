import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  BlogDto,
  DBL_SERVICE,
  IBlogService,
  IParser,
  JSON_PARSER,
} from 'src/core';
import { Blog, DBLService } from 'src/dbl';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class BlogServise implements IBlogService, OnModuleInit {
  @Inject(DBL_SERVICE)
  private readonly dbl: DBLService;
  @Inject(JSON_PARSER)
  private readonly parser: IParser;

  onModuleInit() {
    try {
      const dtos: BlogDto[] = this.parser.getObject(
        `${this.parser.defaultPath}/blogs.json`,
      );
      dtos.forEach((dto) => this.save(dto));
    } catch (exc) {
      console.log(exc.message);
    }
  }

  getAll(): Promise<BlogDto[]> {
    return this.dbl.blogRepository.find({ order: { id: 'DESC' } });
  }

  getByCategory(category: string): Promise<BlogDto[]> {
    return this.dbl.blogRepository.find({
      where: { category },
      order: { id: 'DESC' },
    });
  }
  getByCategoryAndId(category: string, id: string): Promise<BlogDto> {
    return this.dbl.blogRepository.findOne({
      where: { category, id },
      order: { id: 'DESC' },
    });
  }

  save(blogDto: BlogDto): Promise<Blog> {
    const entity: Blog = this.dbl.blogRepository.create({ ...blogDto });
    return this.dbl.blogRepository.save(entity);
  }

  put(id: string, forumDto: BlogDto): Promise<UpdateResult> {
    const entity: Blog = this.dbl.blogRepository.create({ ...forumDto });
    return this.dbl.forumRepository.update({ id }, entity);
  }
  delete(id:string):Promise<DeleteResult>{
    return this.dbl.blogRepository.delete({id});
  }
}
