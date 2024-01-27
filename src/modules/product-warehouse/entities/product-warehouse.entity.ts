import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProductBalanceEntity } from '../../../modules/product-balance/entities/product-balance.entity';

@Entity('product_warehouses')
export class ProductWarehouseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'description', nullable: false })
  description: string;

  @OneToMany(() => ProductBalanceEntity, (balance) => balance.warehouse)
  balances: ProductBalanceEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
