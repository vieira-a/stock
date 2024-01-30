import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { DataNotFoundException } from '../../../../shared/exceptions';
import {
  createdSuccess,
  readSuccess,
} from '../../../../shared/helpers/http-response';
import { CreateWarehouseDto } from '../../dtos';
import { WarehouseService } from '../services/warehouse.service';

@Controller('product/warehouse')
export class WarehouseController {
  constructor(private readonly service: WarehouseService) {}
  @Post()
  async create(
    @Body() warehouseData: CreateWarehouseDto,
    @Res() res: Response,
  ): Promise<Response> {
    await this.service.create(warehouseData);
    return createdSuccess(res);
  }

  @Get()
  async readAll(@Res() res: Response): Promise<Response> {
    const warehouses = await this.service.readAll();

    if (warehouses.length === 0) {
      throw new DataNotFoundException();
    }

    return readSuccess(res, warehouses);
  }
}
