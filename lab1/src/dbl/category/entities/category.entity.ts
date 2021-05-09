import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ICategory } from 'src/core';
import { ChildrenCategory } from 'src/dbl';

@Entity('category')
export class Category implements ICategory {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  type: number;

  @OneToMany(
    () => ChildrenCategory,
    (childrenCategory) => childrenCategory.category,
  )
  children: ChildrenCategory[];
}
