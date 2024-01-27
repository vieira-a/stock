import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';

import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), ProductModule],
  providers: [Logger],
})
export class AppModule {}
