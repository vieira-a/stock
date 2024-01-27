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

@Entity('product_units')
export class ProductUnitEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'acronym', nullable: false, length: 10 })
  acronym: string;

  @Column({ name: 'description', nullable: false, length: 60 })
  description: string;

  @OneToMany(() => ProductEntity, (product) => product.unit)
  products: ProductEntity[];

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
