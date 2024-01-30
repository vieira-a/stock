import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BalanceModule } from '../balance/balance.module';
import { CategoryModule } from './category/category.module';
import { ProductEntity } from './entities';
import { TypeModule } from './type/type.module';
import { UnitModule } from './unit/unit.module';
import { WarehouseModule } from './warehouse/warehouse.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    CategoryModule,
    TypeModule,
    UnitModule,
    BalanceModule,
    WarehouseModule,
  ],
})
export class ProductModule {}
