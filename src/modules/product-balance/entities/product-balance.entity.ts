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

import { ProductWarehouseEntity } from '../../../modules/product-warehouse/entities';
import { ProductEntity } from '../../../modules/product/entities';

@Entity('product_balances')
export class ProductBalanceEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => ProductWarehouseEntity, (warehouse) => warehouse.balances, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'warehouse_id' })
  warehouse: ProductWarehouseEntity;

  @ManyToOne(() => ProductEntity, (product) => product.balances, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @Column({ name: 'amount', nullable: false })
  amount: number;

  @Column({ name: 'email_creation', length: 255 })
  emailCreation: string;

  @Column({ name: 'email_update', length: 255 })
  emailUpdate: string;

  @Column({ name: 'email_delete', length: 255 })
  emailDelete: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
