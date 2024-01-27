import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductUnitEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([ProductUnitEntity])],
})
export class ProductUnitModule {}
