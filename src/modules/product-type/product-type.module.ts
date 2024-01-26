import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductTypeEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([ProductTypeEntity])],
})
export class ProductTypeModule {}
