import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProductCategoryEntity } from '../../../modules/product-category/entities';
import { ProductTypeEntity } from '../../../modules/product-type/entities';
import { ProductUnitEntity } from '../../../modules/product-unit/entities';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => ProductCategoryEntity, (category) => category.products, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'category_id' })
  category: ProductCategoryEntity;

  @ManyToOne(() => ProductTypeEntity, (type) => type.products, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'type_id' })
  type: ProductTypeEntity;

  @ManyToOne(() => ProductUnitEntity, (unit) => unit.products, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'unit_id' })
  unit: ProductUnitEntity;

  @Column({ name: 'description', nullable: false })
  description: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
