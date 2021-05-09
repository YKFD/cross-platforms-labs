import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IForum } from 'src/core';

@Entity('forum')
export class Forum implements IForum {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  title: string;
  @Column()
  body: string;
  @Column()
  category: string;
}
