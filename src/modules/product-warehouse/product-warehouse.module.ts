import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductWarehouseEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([ProductWarehouseEntity])],
})
export class ProductWarehouseModule {}
