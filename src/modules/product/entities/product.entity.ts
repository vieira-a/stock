import { ProductCategoryEntity } from 'src/modules/product-category/entities';
import { ProductWarehouseEntity } from 'src/modules/product-warehouse/entities';
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

import { ProductTypeEntity } from '../../../modules/product-type/entities';
import { Unit } from '../enums';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'description', nullable: false })
  description: string;

  @ManyToOne(() => ProductTypeEntity, (type) => type.products, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'type_id' })
  type: ProductTypeEntity;

  @ManyToOne(() => ProductCategoryEntity, (category) => category.products, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'category_id' })
  category: ProductCategoryEntity;

  @Column({ name: 'unit', nullable: false })
  unit: Unit;

  @ManyToOne(() => ProductWarehouseEntity, (warehouse) => warehouse.products, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'warehouse_id' })
  warehouse: ProductWarehouseEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
