import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProductEntity } from '../../../modules/product/entities';

@Entity('product_categories')
export class ProductCategoryEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'description', nullable: false })
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
