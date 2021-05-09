import { IChildrenCategory } from 'src/core';
import { Category } from 'src/dbl/category';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('category-children')
export class ChildrenCategory implements IChildrenCategory {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  alias: string;

  @Column()
  ord: number;

  @Column()
  categoryId: string;

  @JoinColumn({ name: 'categoryId' })
  @ManyToOne(() => Category)
  category: Category;
}
