import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductCategoryController } from './controllers';
import { ProductCategoryEntity } from './entities';
import { ProductCategoryService } from './services';

@Module({
  controllers: [ProductCategoryController],
  imports: [TypeOrmModule.forFeature([ProductCategoryEntity])],
  providers: [ProductCategoryService],
})
export class ProductCategoryModule {}
