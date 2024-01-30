import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { createdSuccess } from '../../../../shared/helpers/http-response';
import { CreateWarehouseDto } from '../../dtos';
import { WarehouseService } from '../services/warehouse.service';

@Controller('product/warehouse')
export class WarehouseController {
  constructor(private readonly service: WarehouseService) {}
  @Post()
  async create(
    @Body() warehouseData: CreateWarehouseDto,
    @Res() res: Response,
  ) {
    await this.service.create(warehouseData);
    return createdSuccess(res);
  }
}
