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

import { BalanceEntity } from '../../../modules/balance/entities';
import { CategoryEntity, TypeEntity, UnitEntity } from '../entities';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => CategoryEntity, (category) => category.products, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @ManyToOne(() => TypeEntity, (type) => type.products, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'type_id' })
  type: TypeEntity;

  @ManyToOne(() => UnitEntity, (unit) => unit.products, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'unit_id' })
  unit: UnitEntity;

  @OneToMany(() => BalanceEntity, (balance) => balance.product)
  @JoinColumn({ name: 'balance_id' })
  balances: BalanceEntity[];

  @Column({ name: 'description', nullable: false })
  description: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
