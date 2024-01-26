import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductCategoryEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategoryEntity])],
})
export class ProductCategoryModule {}
