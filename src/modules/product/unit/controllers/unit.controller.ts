import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { DataNotFoundException } from '../../../../shared/exceptions';
import {
  createdSuccess,
  readSuccess,
} from '../../../../shared/helpers/http-response';
import { CreateUnitDto } from '../../dtos';
import { UnitService } from '../services';

@Controller('product/unit')
export class UnitController {
  constructor(private readonly service: UnitService) {}

  @Post()
  async create(
    @Body() unitData: CreateUnitDto,
    @Res() res: Response,
  ): Promise<Response> {
    try {
      await this.service.create(unitData);
      return createdSuccess(res);
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  async readAll(@Res() res: Response): Promise<Response> {
    const units = await this.service.readAll();

    if (units.length === 0) {
      throw new DataNotFoundException();
    }

    return readSuccess(res, units);
  }

  @Get(':id')
  async readById(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ): Promise<Response> {
    const unit = await this.service.readById(id);

    if (!unit) {
      throw new DataNotFoundException();
    }

    return readSuccess(res, unit);
  }
}
