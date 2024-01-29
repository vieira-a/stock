import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UnitEntity } from '../entities';

@Module({
  imports: [TypeOrmModule.forFeature([UnitEntity])],
})
export class UnitModule {}
