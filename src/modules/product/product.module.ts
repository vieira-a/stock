import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductBalanceModule } from '../product-balance/product-balance.module';
import { ProductCategoryModule } from '../product-category/product-category.module';
import { ProductTypeModule } from '../product-type/product-type.module';
import { ProductUnitModule } from '../product-unit/product-unit.module';
import { ProductEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    ProductCategoryModule,
    ProductTypeModule,
    ProductUnitModule,
    ProductBalanceModule,
  ],
})
export class ProductModule {}
