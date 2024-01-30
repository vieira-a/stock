import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { DataNotFoundException } from '../../../../shared/exceptions';
import {
  createdSuccess,
  readSuccess,
  updatedSuccess,
} from '../../../../shared/helpers/http-response';
import { CreateWarehouseDto, UpdateWarehouseDto } from '../../dtos';
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

  @Get(':id')
  async readById(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ): Promise<Response> {
    const warehouse = await this.service.readById(id);

    if (!warehouse) {
      throw new DataNotFoundException();
    }

    return readSuccess(res, warehouse);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() warehouseData: UpdateWarehouseDto,
    @Res() res: Response,
  ): Promise<Response> {
    const warehouse = await this.service.readById(id);

    if (!warehouse) {
      throw new DataNotFoundException();
    }

    await this.service.update(warehouse.id, warehouseData);
    return updatedSuccess(res);
  }
}
