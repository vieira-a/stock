import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryEntity } from '../entities';
import { CategoryController } from './controllers';
import { CategoryService } from './services';

@Module({
  controllers: [CategoryController],
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryService],
})
export class CategoryModule {}
