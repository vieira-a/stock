import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductWarehouseModule } from '../product-warehouse/product-warehouse.module';
import { ProductBalanceEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductBalanceEntity]),
    ProductWarehouseModule,
  ],
})
export class ProductBalanceModule {}
