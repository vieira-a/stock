import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WarehouseEntity } from '../entities';
import { WarehouseController } from './controllers';
import { WarehouseService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([WarehouseEntity])],
  providers: [WarehouseService],
  controllers: [WarehouseController],
})
export class WarehouseModule {}
