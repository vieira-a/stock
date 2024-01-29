import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductBalanceModule } from '../product-balance/product-balance.module';
import { ProductUnitModule } from '../product-unit/product-unit.module';
import { CategoryModule } from './category/category.module';
import { ProductEntity } from './entities';
import { TypeModule } from './type/type.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    CategoryModule,
    TypeModule,
    ProductUnitModule,
    ProductBalanceModule,
  ],
})
export class ProductModule {}
