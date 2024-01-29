import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductBalanceModule } from '../product-balance/product-balance.module';
import { ProductTypeModule } from '../product-type/product-type.module';
import { ProductUnitModule } from '../product-unit/product-unit.module';
import { CategoryModule } from './category/category.module';
import { ProductEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    CategoryModule,
    ProductTypeModule,
    ProductUnitModule,
    ProductBalanceModule,
  ],
})
export class ProductModule {}
