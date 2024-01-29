import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProductBalanceEntity } from '../../../modules/product-balance/entities/product-balance.entity';
import { ProductTypeEntity } from '../../../modules/product-type/entities';
import { ProductUnitEntity } from '../../../modules/product-unit/entities';
import { CategoryEntity } from '../entities';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => CategoryEntity, (category) => category.products, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

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

  @OneToMany(() => ProductBalanceEntity, (balance) => balance.product)
  @JoinColumn({ name: 'balance_id' })
  balances: ProductBalanceEntity[];

  @Column({ name: 'description', nullable: false })
  description: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
