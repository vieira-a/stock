import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import {
  createdSuccess,
  deletedSuccess,
  readSuccess,
  updatedSuccess,
} from '../../../../shared/helpers/http-response';
import { CreateTypeDto, UpdateTypeDto } from '../../dtos';
import { TypeService } from '../services';

@Controller('product/type')
export class TypeController {
  constructor(private readonly service: TypeService) {}

  @Post()
  async create(
    @Body() typeData: CreateTypeDto,
    @Res() res: Response,
  ): Promise<Response> {
    await this.service.create(typeData);
    return createdSuccess(res);
  }

  @Get()
  async readAll(@Res() res: Response): Promise<Response> {
    const types = await this.service.readAll();
    return readSuccess(res, types);
  }

  @Get(':id')
  async readById(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ): Promise<Response> {
    const type = await this.service.readById(id);

    if (!type) {
      throw new NotFoundException('Tipo de produto não encontrado');
    }

    return readSuccess(res, type);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() typeData: UpdateTypeDto,
    @Res() res: Response,
  ): Promise<Response> {
    const type = await this.service.readById(id);

    if (!type) {
      throw new NotFoundException('Tipo de produto não encontrado');
    }

    await this.service.update(id, typeData);
    return updatedSuccess(res);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const type = await this.service.readById(id);

    if (!type) {
      throw new NotFoundException('Tipo de produto não encontrado');
    }

    await this.service.delete(id);
    return deletedSuccess(res);
  }
}
