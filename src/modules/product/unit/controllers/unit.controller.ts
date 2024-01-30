import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { createdSuccess } from '../../../../shared/helpers/http-response';
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
}
