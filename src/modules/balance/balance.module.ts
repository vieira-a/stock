import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WarehouseModule } from '../product/warehouse/warehouse.module';
import { BalanceEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([BalanceEntity]), WarehouseModule],
})
export class BalanceModule {}
