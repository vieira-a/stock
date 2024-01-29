import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeEntity } from '../entities';
import { TypeController } from './controllers';
import { TypeService } from './services';

@Module({
  controllers: [TypeController],
  imports: [TypeOrmModule.forFeature([TypeEntity])],
  providers: [TypeService],
})
export class TypeModule {}
