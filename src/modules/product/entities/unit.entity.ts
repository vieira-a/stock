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

@Entity('product_units')
export class UnitEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'acronym', nullable: false, length: 2, unique: true })
  acronym: string;

  @Column({ name: 'description', nullable: false, length: 60, unique: true })
  description: string;

  @OneToMany(() => ProductEntity, (product) => product.unit)
  products: ProductEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
