import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductCategoryModule } from '../product-category/product-category.module';
import { ProductTypeModule } from '../product-type/product-type.module';
import { ProductWarehouseModule } from '../product-warehouse/product-warehouse.module';
import { ProductEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    ProductCategoryModule,
    ProductWarehouseModule,
    ProductTypeModule,
  ],
})
export class ProductModule {}
