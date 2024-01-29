import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WarehouseEntity } from '../entities';

@Module({
  imports: [TypeOrmModule.forFeature([WarehouseEntity])],
})
export class WarehouseModule {}
