import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProductEntity } from '.';

@Entity('product_categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'description', nullable: false, unique: true })
  description: string;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}