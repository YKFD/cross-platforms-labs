import { INews } from 'src/core';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')
export class News implements INews {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  title: string;
  @Column()
  body: string;
  @Column()
  category: string;
}
