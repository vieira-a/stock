import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UnitEntity } from '../entities';
import { UnitController } from './controllers';
import { UnitService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([UnitEntity])],
  providers: [UnitService],
  controllers: [UnitController],
})
export class UnitModule {}
