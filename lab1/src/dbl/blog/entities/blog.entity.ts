import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IBlog } from 'src/core';

@Entity('blog')
export class Blog implements IBlog {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  title: string;
  @Column()
  body: string;
  @Column()
  category: string;
}
