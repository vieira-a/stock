import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductTypeController } from './controllers';
import { ProductTypeEntity } from './entities';
import { ProductTypeService } from './services';

@Module({
  controllers: [ProductTypeController],
  imports: [TypeOrmModule.forFeature([ProductTypeEntity])],
  providers: [ProductTypeService],
})
export class ProductTypeModule {}
